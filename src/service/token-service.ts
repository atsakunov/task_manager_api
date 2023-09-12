import jwt from 'jsonwebtoken';
import tokenModel from '../models/token-model';
import { type ObjectId } from 'mongoose';

class TokenServiceClass {
  generateTokens = (payload: any) => {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET ?? '', { expiresIn: '30m' });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET ?? '30d');

    return { accessToken, refreshToken };
  };

  saveToken = async (userId: ObjectId, refreshToken: string) => {
    const tokenData = await tokenModel.findOne({ user: userId });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return await tokenData.save();
    }
    const token = await tokenModel.create({ user: userId, refreshToken });

    return token;
  };
}

export const tokenService = new TokenServiceClass();
