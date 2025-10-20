import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
const allowedOrigin = ['http://localhost:5173']
app.use(cors({
  origin:allowedOrigin,
  credentials:true
}));
app.get('/',(req,res) => res.send("API working"));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));