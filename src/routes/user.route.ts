import { UserControllers } from './../controllers/user.controller'
import express from 'express'

const router = express.Router()

router.post('/create-user', UserControllers.createStudent)
router.get('/all-user', UserControllers.getAllUser)
router.get('/:id', UserControllers.getSingleUser)

export const UserRoutes = router
