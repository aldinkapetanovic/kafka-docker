```sh
docker run --name postgres -p 5000:5432 -e POSTGRES_PASSWORD=password debezium/postgres
```

```sh
docker run -it --name zookeeper -p 2181:2181 -p 2888:2888 -p 3888:3888 debezium/zookeeper
```

```sh
docker run -it --name kafka -p 9092:9092 --link zookeeper:zookeeper debezium/kafka
```

```sh
docker run -it --name connect -p 8083:8083 -e GROUP_ID=1 -e CONFIG_STORAGE_TOPIC=my-connect-configs -e OFFSET_STORAGE_TOPIC=my-connect-offsets --link zookeeper:zookeeper --link postgres:postgres --link kafka:kafka debezium/connect

```

```sh
psql -h localhost -p 5000 -d postgres -U postgres
```

```sh
curl -X POST -H "Accept:application/json" -H "Content-Type:application/json" localhost:8083/connectors/ -d '
{
"name": "postgres-connector",
"config": {
"connector.class": "io.debezium.connector.postgresql.PostgresConnector",
"tasks.max": "1",
"topic.prefix" : "postgresql_",
"database.hostname": "postgres",
"database.port": "5432",
"database.user": "postgres",
"database.password": "password",
"database.dbname" : "postgres",
"database.server.name": "dbserver1",
"database.whitelist": "postgres",
"database.history.kafka.bootstrap.servers": "kafka:9092",
"database.history.kafka.topic": "schema-changes.postgres"
}
}'

```


http://localhost:8083/connectors/

