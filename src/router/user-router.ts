import { Router } from 'express';
import { userController } from '../controllers/user-controller';
import { authController } from '../controllers/auth-controller';

const router = Router();

router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/refresh', authController.refresh);
router.get('/activate/:link', authController.activate);
router.get('/users', userController.getUsers);

export const userRouter = router;
