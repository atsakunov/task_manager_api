import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { userRouter } from './router';

const PORT = process.env.PORT ?? 5555;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/v1', userRouter);

const start = async (): Promise<void> => {
  try {
    app.listen(PORT, async () => {
      await mongoose.connect(process.env.DB_URL as string);
      console.log(`Server started on ${PORT} port`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
