import { User } from "../models/User";

export const deleteUser = async (id: String) => {
    try {
        return await User.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
}
