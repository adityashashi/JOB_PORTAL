import express from 'express'
import userAuth from '../middlewares/authMiddleware.js';
import { userController } from '../controllers/userController.js';

//router objects

const router = express.Router()

//routes

//GET USERS || GET
router.put('/update-user', userAuth, userController)

export default router;