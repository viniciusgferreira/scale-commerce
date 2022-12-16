import { Order } from "../models/Order";

export const updateOrder = async (id: String, user: { user: string; totalPrice: Number; products: Array<String>; }) => {
  try {
    return await Order.findByIdAndUpdate(id, user, { returnDocument: "after" });
  } catch (err) {
    console.log(err);
  }
}
