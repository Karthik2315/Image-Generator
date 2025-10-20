import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import cookieParser from 'cookie-parser';
import UserRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
const allowedOrigin = ['http://localhost:5173']
app.use(cors({
  origin:allowedOrigin,
  credentials:true
}));
app.use(cookieParser());
await connectDB();
app.use('/api/user',UserRouter);
app.get('/',(req,res) => res.send("API working"));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
