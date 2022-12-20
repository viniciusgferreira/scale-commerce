import amqp, { Message } from 'amqplib';
import { addOrder } from '../controllers/user-controller';

const amqpURL = 'amqp://localhost:5672'

export async function consumeMessages() {
  console.log('Consuming');
  const connection = await amqp.connect(amqpURL);
  const channel = await connection.createChannel();
  const queue = 'newOrders';

  await channel.assertQueue(queue, { durable: true });
  await channel.consume(queue, (msg) => {

    // ADD ORDER ID TO USER DATABASE
    if (msg) {
      const orderJson = JSON.parse(msg.content.toString());
      addOrder(orderJson.user, orderJson._id);

      channel.ackAll();
      channel.cancel('myconsumer');
      console.log('Consumed.');
    }
  }, { consumerTag: 'myconsumer' });

  setTimeout(() => {
    channel.close();
    connection.close();
    console.log('Connection amqp closed');
  }, 500);

}
