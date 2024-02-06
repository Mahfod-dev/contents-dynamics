import { Router } from 'express';
const router = Router();

import {
	getAllContents,
	updateContent,
	deleteContent,
	createContent,
	getAllLanguages,
} from '../controllers/contentsController.js';

router.route('/').get(getAllContents).post(createContent);
router.route('/:id').patch(updateContent).delete(deleteContent);
router.route('/languages').get(getAllLanguages);

export default router;
