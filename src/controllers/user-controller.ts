import { type NextFunction, type Request, type Response } from 'express';
import userModel from '../models/user-model';

class UserControllerClass {
  getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = userModel.find();
      res.json(users);
    } catch (error) {}
  };
}

export const userController = new UserControllerClass();
