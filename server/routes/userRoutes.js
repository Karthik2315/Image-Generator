import express from 'express';
import {registerUser,loginUser, userCredits, logoutUser, getUserDetails} from '../controllers/userController.js';
import { userAuth } from '../middlewares/auth.js';

const UserRouter = express.Router();  

UserRouter.post('/register',registerUser);
UserRouter.post('/login',loginUser);
UserRouter.get('/credits',userAuth,userCredits);
UserRouter.post('/logout',userAuth,logoutUser);
UserRouter.get('/me',userAuth,getUserDetails);
export default UserRouter;