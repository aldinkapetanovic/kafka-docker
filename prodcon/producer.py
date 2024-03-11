# producer.py
from kafka import KafkaProducer
from datetime import datetime
import json
producer = KafkaProducer(
    bootstrap_servers=['localhost:9093'],
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)
producer.send('foo', {'author': 'ak', 'content': 'bar', 'created_at': datetime.now().isoformat()})

producer.flush()