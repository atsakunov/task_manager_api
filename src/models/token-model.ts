import { type ObjectId } from 'mongodb';
import { Schema, model } from 'mongoose';

export interface ITokenModel {
  user: typeof ObjectId;
  refreshToken: string;
}

const TokenSchema = new Schema<ITokenModel>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, require: true },
});

export default model('Token', TokenSchema);
