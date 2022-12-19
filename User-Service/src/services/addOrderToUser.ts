import { User } from "../models/User";

export const addOrderToUser = async (userid: string, user: { username: string, role: string, orders: Array<string> }) => {
  try {
    return await User.findByIdAndUpdate(userid, user, { returnDocument: "after" });
  } catch (err) {
    console.log(err);
  }
}
