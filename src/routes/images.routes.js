import { Router } from "express";
import * as imagesController from '../controllers/images.controller.js'

const router = Router();

router.get('/images/:image_id', imagesController.getImageById);

export default router;