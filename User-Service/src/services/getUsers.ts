import { User } from "../models/User";
import { consumeMessages } from "../utils/user-consumer";

export const getUsers = async () => {
  try {
    consumeMessages();
    return await User.find();
  } catch (err) {
    console.log(err);
  }
}
