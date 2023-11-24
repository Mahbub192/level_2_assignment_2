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

const getSingleUser = async (id: string) => {
  console.log(15, id)
  const result = await User.findById(id)
  return result
}

const updateUser = async (
  id: string,
  userData: TUser,
): Promise<TUser | null> => {
  const result = await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  })

  return result
}

const deleteUser = async (id: string): Promise<TUser | null> => {
  const result = await User.findByIdAndDelete(id)
  return result
}

export const UserServices = {
  createUserDB,
  getAllUserDB,
  getSingleUser,
  updateUser,
  deleteUser,
}
