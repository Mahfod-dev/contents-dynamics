import { Router } from 'express';
import { register, login, logout } from '../controllers/authController.js';
import {
	validateRegisterInput,
	validateLoginInput,
} from '../middleware/authMiddleware.js';
const router = Router();

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.delete('/logout', logout);

export default router;
