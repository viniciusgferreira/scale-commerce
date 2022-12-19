import amqp, { Message } from 'amqplib';
import { addOrder } from '../controllers/user-controller';

export async function consumeMessages() {
  console.log('Consuming');
  const connection = await amqp.connect('amqp://localhost:5672');
  const channel = await connection.createChannel();
  const queue = 'newOrders';

  await channel.assertQueue(queue, { durable: true });
  await channel.consume(queue, (msg) => {
    console.log(msg?.content.toString());

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
  }, 500);

}
