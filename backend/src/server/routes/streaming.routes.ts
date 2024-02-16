import { checkAdminRole } from './../middleware/checkAdminRole';
import { Router } from 'express';
import { createStreaming, getAllStreamings } from '../controllers/Streaming';

const router: Router = Router();

router.route('/').post(checkAdminRole, createStreaming).get(getAllStreamings);

export default router;
