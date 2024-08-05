import express from 'express';
import { uploadMiddleware, uploadFile } from '../controllers/fileUpload.js';

const router = express.Router();

// Path: server/router/fileRouter.js

router.post('/upload', uploadMiddleware, uploadFile);

export default router;
