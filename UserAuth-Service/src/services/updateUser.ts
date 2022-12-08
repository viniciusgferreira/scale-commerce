import { User } from "../models/User";

export const updateUser = async (id: String, user: object) => {
    try {
        await User.findByIdAndUpdate(id, user, { "options.returnDocument": "after" });
    } catch (err) {
        console.log(err);
    }
}
