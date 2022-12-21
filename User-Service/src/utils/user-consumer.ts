import amqp, { Message } from 'amqplib';
import { addOrder } from '../controllers/user-controller';

const rabbitmq = process.argv[2] || 'rabbitmq'
const amqpURL = `amqp://${rabbitmq}:5672`

// CONSUME MESSAGES FROM ORDERS QUEUE
export async function consumeMessages() {
  try {
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
        console.log('Message consumed.');
      }
    }, { consumerTag: 'User-consumer' });
  } catch (err) { throw new Error; }

}
