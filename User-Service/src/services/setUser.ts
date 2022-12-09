import { User } from "../models/User";

export const setUser = async (user: object) => {
  try {
    return await User.create(user);
  } catch (err) {
    console.log(err);
  }
}
