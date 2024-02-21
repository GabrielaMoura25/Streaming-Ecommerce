import express from 'express';
import { downloadImage } from '../controllers/Image/Download';

const router = express.Router();

router.get('/:fileName', downloadImage);

export default router;