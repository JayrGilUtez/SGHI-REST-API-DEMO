import { Router } from 'express';
import * as storiesController from '../controllers/stories.controller.js';

const router = Router();

router.get('/stories', storiesController.getAllStories);

export default router;