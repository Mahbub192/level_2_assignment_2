import { TUser } from '../interfaces/user.interfaces'
import { User } from '../modules/user.module'

const createUserDB = async (user: TUser) => {
  if (await User.isUserExists(user.userId)) {
    throw new Error('User Id already exists!')
  } else if (await User.isUserNameExists(user.username)) {
    throw new Error('User name already exists!')
  } else {
    const result = await User.create(user)
    return result
  }
}

const getAllUserDB = async () => {
  const result = await User.find(
    {},
    { username: 1, fullName: 1, address: 1, email: 1, age: 1, _id: 0 },
  )
  return result
}

const getSingleUser = async (id: number) => {
  if (await User.isUserExists(id)) {
    const result = await User.findOne({ userId: id }).select({
      password: 0,
    })
    return result
  } else {
    throw new Error('No user for this user id')
  }
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
