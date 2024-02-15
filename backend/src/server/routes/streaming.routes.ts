import { Router } from 'express';
import { createStreaming } from '../controllers/Streaming';

const router: Router = Router();

router.route('/').post(createStreaming);

export default router;
