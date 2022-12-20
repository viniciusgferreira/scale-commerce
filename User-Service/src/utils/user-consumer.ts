import amqp, { Message } from 'amqplib';
import { addOrder } from '../controllers/user-controller';

const amqpURL = 'amqp://localhost:5672'

// CONSUME MESSAGES FROM ORDERS QUEUE
export async function consumeMessages() {
  const connection = await amqp.connect(amqpURL);
  const channel = await connection.createChannel();
  const queue = 'newOrders';
  console.log('Consuming messages from RabbitMQ: Orders queue');

  await channel.assertQueue(queue, { durable: true });
  await channel.consume(queue, (msg) => {

    // ADD ORDER ID TO USER DATABASE
    if (msg) {
      const orderJson = JSON.parse(msg.content.toString());
      addOrder(orderJson.user, orderJson._id);

      channel.ack(msg);
      //channel.cancel('User-consumer');
      console.log('Message consumed.');
    }
  }, { consumerTag: 'User-consumer' });
}
