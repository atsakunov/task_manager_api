import { type NextFunction, type Request, type Response } from 'express';
import { authService } from '../service/auth-service';

class AuthControllerClass {
  registration = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const userData = await authService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

      return res.json({ accessToken: userData.accessToken });
    } catch (error) {
      error instanceof Error && res.status(400).send({ error: error.message });
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ name: 'Test' });
    } catch (error) {}
  };

  logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ name: 'Test' });
    } catch (error) {}
  };

  refresh = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ name: 'Test' });
    } catch (error) {}
  };

  activate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ name: 'Test' });
    } catch (error) {}
  };
}

export const authController = new AuthControllerClass();
