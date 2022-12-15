import { Order } from "../models/Order";

export const getOrders = async () => {
  try {
    return await Order.find();
  } catch (err) {
    console.log(err);
  }
}
