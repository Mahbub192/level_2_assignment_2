import { Schema, model } from 'mongoose'
import { TUser, UserModel } from '../interfaces/user.interfaces'

const userSchema = new Schema<TUser, UserModel>({
  userId: { type: Number, required: true, unique: true, trim: true },
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
  hobbies: [String],
  address: {
    street: { type: String },
    city: { type: String },
    country: { type: String },
  },
})

userSchema.statics.isUserExists = async function (id: number) {
  const existingUser = await User.findOne({ userId: id })
  return existingUser
}
userSchema.statics.isUserNameExists = async function (name: string) {
  const existingUser = await User.findOne({ username: name })
  return existingUser
}
// userSchema.statics.isUserExists = async function (id: number) {
//   console.log(28, id)
//   const existingUser = await User.findOne({ id })
//   return existingUser
// }

export const User = model<TUser, UserModel>('User', userSchema)
