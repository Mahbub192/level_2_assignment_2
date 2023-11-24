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
      userId: 1,
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      isActive: 1,
      hobbies: 1,
      address: 1,
    })
    return result
  } else {
    throw new Error('No user for this user id')
  }
}
const updateUser = async (
  id: number,
  userData: Partial<TUser>,
): Promise<TUser | null> => {
  if (await User.isUserExists(id)) {
    const result = await User.findOne({ userId: id }).select({
      password: 0,
    })
    return result
  }
  const filter = { userId: id }
  const updateDoc = {
    $set: userData,
  }

  try {
    const result = await User.findOneAndUpdate(filter, updateDoc, { new: true })
    return result
  } catch (error) {
    throw new Error('Error updating user:')
  }
}

const deleteUser = async (id: number): Promise<TUser | null> => {
  if (await User.isUserExists(id)) {
    const result = await User.findOne({ userId: id }).select({
      password: 0,
    })
    const deleteResult = await User.deleteOne({ userId: id }).exec()
    if (deleteResult.deletedCount == 1) {
      return result
    } else {
      throw new Error('Delete faild')
    }
  } else {
    throw new Error('No user for this user id')
  }
}

export const UserServices = {
  createUserDB,
  getAllUserDB,
  getSingleUser,
  updateUser,
  deleteUser,
}
