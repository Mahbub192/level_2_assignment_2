import { TUser } from '../interfaces/user.interfaces'
import { User } from '../modules/user.module'
const createUserDB = async (user: TUser) => {
  const result = await User.create(user)
  return result
}

export const UserServices = { createUserDB }
