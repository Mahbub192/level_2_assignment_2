import { UserControllers } from './../controllers/user.controller'
import express from 'express'

const router = express.Router()

router.post('/', UserControllers.createUser)
router.get('/', UserControllers.getAllUser)
router.get('/:userId', UserControllers.getSingleUser)
router.put('/:userId', UserControllers.updateUser)
router.delete('/:userId', UserControllers.deleteUser)

export const UserRoutes = router
