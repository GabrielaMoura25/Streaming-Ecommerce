import { Router } from 'express';

import { createStreaming, getAllStreamings, updateStreamingById } from '../controllers/Streaming';

import { checkAdminRole } from './../middleware/checkAdminRole';

const router: Router = Router();

router.route('/').post(checkAdminRole, createStreaming).get(getAllStreamings);

router.route('/:id')
  .put(checkAdminRole, updateStreamingById);

export default router;
