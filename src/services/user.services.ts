import { TUser } from '../interfaces/user.interfaces'
import { User } from '../modules/user.module'

import { Document, Model } from 'mongoose'

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
  id: number,
  userData: Partial<TUser>,
): Promise<TUser | null> => {
  const filter = { userId: id }
  const updateDoc = {
    $set: userData,
  }

  try {
    const result = await User.findOneAndUpdate(filter, updateDoc, { new: true })
    return result
  } catch (error) {
    console.error('Error updating user:', error)
    throw error
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
