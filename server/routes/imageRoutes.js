import express from 'express';
import { generateImage } from '../controllers/imageController.js';
import { userAuth } from '../middlewares/auth.js';

const ImageRouter = express.Router();

ImageRouter.post('/generate-image', userAuth, generateImage);

export default ImageRouter;