const { Kafka } = require('kafkajs');

async function runProducer() {
  const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9093'],
  });

  const producer = kafka.producer();

  try {
    await producer.connect();

    await producer.send({
      topic: 'test-topic',
      messages: [{ value: 'Hello KafkaJS user!' }, { value: 'Foo' }, { value: 'Bar' }],
    });

    // await producer.send({
    //   topic: 'test-topic',
    //   messages: [{ value: JSON.stringify({ message: 'Hello KafkaJS user!', foo: 'bar' }) }],
    // });


    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
  } finally {
    await producer.disconnect();
  }
}

runProducer();

// const express = require('express');
// const { Kafka } = require('kafkajs');

// const app = express();

// // Define Kafka configuration
// const kafka = new Kafka({
//   clientId: '1',
//   brokers: ['localhost:9093'],
// });

// // Initialize Kafka producer
// const producer = kafka.producer();

// // Route handler to trigger message production
// app.post('/produce', async (req, res) => {
//   try {
//     // Connect to Kafka broker
//     await producer.connect();

//     // Produce messages
//     await producer.send({
//       topic: 'test-topic',
//       messages: [
//         { value: 'Hello KafkaJS user!' },
//       ],
//     });

//     console.log('Messages produced successfully');
//     res.status(200).send('Messages produced successfully');
//   } catch (error) {
//     console.error('Error producing messages:', error);
//     res.status(500).send('Error producing messages');
//   } finally {
//     // Disconnect from Kafka broker
//     await producer.disconnect();
//   }
// });

// // Start the Express server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
