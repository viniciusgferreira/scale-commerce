import bcrypt from 'bcrypt';
import { User } from "../models/User";

export const setUser = async (user: { username: string; password: string; role: string; }) => {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    return await User.create(user);
  } catch (err) {
    console.log(err);
  }
}
