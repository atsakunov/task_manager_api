import userModel from '../models/user-model';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { mailService } from './mail-service';
import { tokenService } from './token-service';
import { UserDTO } from '../dtos/user-dto';

class AuthServiceClass {
  registration = async (email: string, password: string) => {
    const candidate = await userModel.findOne({ email });
    if (candidate) {
      throw new Error(`User with email ${email} is already exist`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activatedLink = uuidv4();
    const user = await userModel.create({ email, password: hashPassword, activatedLink });
    mailService.sendActivationMail(email, activatedLink);
    const userDto = new UserDTO(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  };
}

export const authService = new AuthServiceClass();
