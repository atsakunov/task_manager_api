import { type ObjectId, Schema, model } from 'mongoose';

export interface IUserModel {
  _id: ObjectId;
  email: string;
  password: string;
  isActivated: boolean;
  activatedLink: string;
}

const UserSchema = new Schema<IUserModel>({
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  isActivated: { type: Boolean, default: false },
  activatedLink: { type: String },
});

export default model('User', UserSchema);
