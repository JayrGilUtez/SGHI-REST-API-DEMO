import { Router } from 'express';
import * as storiesController from '../controllers/stories.controller.js';
const router = Router();

router.get('/stories', storiesController.getAllStories);
router.get('/story/:story_id', storiesController.getStoryById);
router.get('/stories/:user_id', storiesController.getStoriesByUserId);
router.post('/stories', storiesController.createStory);
router.put('/stories/:story_id', storiesController.updateStory);
router.delete('/stories/:story_id',storiesController.deleteStoryById);

export default router;