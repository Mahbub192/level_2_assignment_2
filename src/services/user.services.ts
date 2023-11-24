import { TUser } from '../interfaces/user.interfaces'
import { User } from '../modules/user.module'

const createUserDB = async (user: TUser) => {
  const result = await User.create(user)
  return result
}

const getAllUserDB = async () => {
  const result = await User.find()
  return result
}

const getSingleUser = async (id: number) => {
  console.log(15, id)
  const result = await User.findOne({ userId: id })
  return result
}

export const UserServices = { createUserDB, getAllUserDB, getSingleUser }
