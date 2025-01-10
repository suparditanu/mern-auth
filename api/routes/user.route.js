import express from 'express';
import { test } from '../controllers/user.controller.js';
import { verify } from 'jsonwebtoken';
import { verifyToken } from '../utils/veryfyUser.js';

const router = express.Router();

router.get('/', test);
router.post('/update/:id', verifyToken, updateUser);

export default router;