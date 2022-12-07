import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new Schema({
  username: {
    type: String, lowercase: true, unique: true, required: [true, 'cannot be blank'], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true
  },
  password: String,
}, { timestamps: true });

// VALIDATE UNIQUE USERNAME
userSchema.plugin(uniqueValidator, { message: 'username already taken.' });

export const User = model('User', userSchema)
