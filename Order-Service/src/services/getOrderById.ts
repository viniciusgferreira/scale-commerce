import { Order } from "../models/Order";

export const getOrderById = async (id: String) => {
  try {
    return await Order.findById(id);
  } catch (err) {
    console.log(err);
  }
}
