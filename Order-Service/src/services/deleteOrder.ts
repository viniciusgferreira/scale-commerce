import { Order } from "../models/Order";

export const deleteOrder = async (id: String) => {
  try {
    return await Order.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
}
