import { Request, Response } from 'express'
import { UserServices } from '../services/user.services'

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

export const UserControllers = {
  createStudent,
}
