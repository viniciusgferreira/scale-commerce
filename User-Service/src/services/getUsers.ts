import { User } from "../models/User";

export const getUsers = async () => {
  try {
    return await User.find();
  } catch (err) {
    console.log(err);
  }
}
