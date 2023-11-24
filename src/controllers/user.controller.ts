import { UserServices } from './../services/user.services'
import { Request, Response } from 'express'
import { UserValidationSchema } from './userZod'

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body
    const zodData = UserValidationSchema.parse(user)
    const result = await UserServices.createUserDB(zodData)

    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'User id or user name are already exist',
      error: error,
    })
  }
}

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserDB()
    res.status(200).json({
      success: true,
      message: 'Get all user from DataBase',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId
    const result = await UserServices.getSingleUser(id)
    res.status(200).json({
      success: true,
      message: 'Get A single User',
      data: result,
    })
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Something was wrong2',
      error: error,
    })
  }
}
const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const id = req.params.userId
    console.log(60, id)
    const result = await UserServices.updateUser(id, userData)
    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error || 'Something went wrong',
    })
  }
}
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId
    const result = await UserServices.deleteUser(id)
    console.log(78, result)
    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'false',
      message: error || 'Something went wrong',
    })
  }
}

export const UserControllers = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
}
