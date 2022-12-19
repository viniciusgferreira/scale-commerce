import { User } from "../models/User";
import bcrypt from 'bcrypt';

export const updateUser = async (user: { id: string, username: string, password: string, role: string, orders: Array<string> }) => {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    return await User.findByIdAndUpdate(user.id, user, { returnDocument: "after" });
  } catch (err) {
    console.log(err);
  }
}
