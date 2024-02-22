import { Router } from 'express';

import {
  createStreaming,
  deleteStreamingById,
  getAllStreamings,
  updateStreamingById,
  getPhotos,
  getStreamingByName
} from '../controllers/Streaming';

import validateToken from '../middlewares/validateToken';
import upload from '../utils/multerUpload';

const router: Router = Router();

router.route('/title').get(getStreamingByName);

router.route('/photos/:photoName').get(getPhotos);

router.route('/')
  .post(validateToken, upload.single('photo'), createStreaming)
  .get(getAllStreamings);

router.route('/:id')
  .put(upload.single('photo'), updateStreamingById)
  .delete(deleteStreamingById);

export default router;
