import { UserControllers } from './../controllers/user.controller'
import express from 'express'

const router = express.Router()

router.post('/create-user', UserControllers.createStudent)
router.get('/all-user', UserControllers.getAllUser)
router.get('/:id', UserControllers.getSingleUser)
router.patch('/:id', UserControllers.updateUser)
router.delete('/:id', UserControllers.deleteUser)

export const UserRoutes = router
