import amqp from 'amqplib'

export async function produce(payload: String) {
  console.log('Publishing');
  const connection = await amqp.connect('amqp://localhost:5672');
  const channel = await connection.createChannel();
  const exchange = 'orders';
  const queue = 'newOrders';
  const rkey = 'testRoute';

  await channel.assertExchange(exchange, 'direct', { durable: false }).catch(console.error);
  await channel.assertQueue(queue, { durable: true });
  await channel.bindQueue(queue, exchange, rkey);
  await channel.publish(exchange, rkey, Buffer.from(payload));

  console.log('Published.');
  setTimeout(() => {
    channel.close();
    connection.close();
  }, 500);

}
