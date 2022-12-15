import { Order } from "../models/Order";

export const setOrder = async (order: { user: string; totalPrice: Number; products: Array<string>; }) => {
  try {
    return await Order.create(order);
  } catch (err) {
    console.log(err);
  }
}
