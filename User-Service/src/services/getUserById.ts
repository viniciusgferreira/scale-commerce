import { User } from "../models/User";

export const getUserById = async (id: String) => {
  try {
    return await User.findById(id, '-password');
  } catch (err) {
    console.log(err);
  }
}
