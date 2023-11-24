import { Schema, model } from 'mongoose'
import { TUser } from '../interfaces/user.interfaces'

const userSchema = new Schema<TUser>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: ['active', 'blocked'],
  hobbies: [String],
  address: {
    street: { type: String },
    city: { type: String },
    country: { type: String },
  },
})

export const User = model<TUser>('User', userSchema)
