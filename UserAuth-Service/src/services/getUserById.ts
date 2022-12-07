import { User } from "../models/User";

export const getUserById = async (id: String) => {
  try {
    return await User.find().where('_id').equals(id);
  } catch (err) {
    console.log(err);
  }
}
