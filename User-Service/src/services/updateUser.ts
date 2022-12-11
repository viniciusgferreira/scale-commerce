import { User } from "../models/User";
import bcrypt from 'bcrypt';

export const updateUser = async (id: String, user: { username: string; password: string; role: string; }) => {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        return await User.findByIdAndUpdate(id, user, { returnDocument: "after" });
    } catch (err) {
        console.log(err);
    }
}
