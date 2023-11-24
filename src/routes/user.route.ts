import express from 'express'
import { UserControllers } from '../controllers/user.controller'

const router = express.Router()

router.post('/create-user', UserControllers.createStudent)

export const UserRoutes = router
