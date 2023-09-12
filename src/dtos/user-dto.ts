import { type ObjectId } from 'mongoose';
import { type IUserModel } from '../models/user-model';

export interface IUserDto {
  email: string;
  id: ObjectId;
  isActivated: boolean;
}

export class UserDTO implements IUserDto {
  id;
  email;
  isActivated;

  constructor(model: IUserModel) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
  }
}
