from confluent_kafka import Producer
import json

# Kafka broker(s) address
bootstrap_servers = 'localhost:9093'

# Kafka topic to produce messages to
topic = 'posts-topic'

# Create Producer configuration
conf = {
    'bootstrap.servers': bootstrap_servers
}

# Create Producer instance
producer = Producer(conf)

# Function to produce messages to Kafka topic
def produce_message(message):
    try:
        # Produce message to topic
        producer.produce(topic, json.dumps(message))
        print(f"Produced message: {message}")
    except Exception as e:
        print(f"Error while producing message: {e}")
    finally:
        # Flush producer buffers
        producer.flush()

# Example messages to produce
messages = [
    {"key": "1", "value": "Hello, Kafka!"},
    {"key": "2", "value": "Another message."},
    {"key": "3", "value": "Yet another message."}
]

# Produce each message to Kafka topic
for message in messages:
    produce_message(message)
