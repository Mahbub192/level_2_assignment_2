import { UserServices } from './../services/user.services'
import { Request, Response } from 'express'

const createStudent = async (req: Request, res: Response) => {
  try {
    const user = req.body
    console.log(7, user)
    const result = await UserServices.createUserDB(user)

    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
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
    const id = req.params.id
    console.log(36, id)
    const result = await UserServices.getSingleUser(parseInt(id))
    res.status(200).json({
      success: true,
      message: 'Get A single User',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const UserControllers = {
  createStudent,
  getAllUser,
  getSingleUser,
}
