import express from 'express';
import {registerUser,loginUser, userCredits, logoutUser} from '../controllers/userController.js';
import { userAuth } from '../middlewares/auth.js';

const UserRouter = express.Router();  

UserRouter.post('/register',registerUser);
UserRouter.post('/login',loginUser,userAuth);
UserRouter.get('/credits',userAuth,userCredits);
UserRouter.post('/logout',userAuth,logoutUser);
export default UserRouter;