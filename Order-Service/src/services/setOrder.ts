import { Order } from "../models/Order";
import { produce } from "../utils/order-publisher";

export const setOrder = async (order: { user: string; totalPrice: Number; products: Array<string>; }) => {
  try {
    // ADD NEW ORDER TO DB
    const newOrder = await Order.create(order);

    // ADD EVENT TO RABBITMQ ORDERS QUEUE
    produce(JSON.stringify(newOrder));

    return newOrder;
  } catch (err) {
    console.log(err);
  }
}
