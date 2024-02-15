import { Router, Request, Response } from 'express';

import userRoutes from './user.routes';
import streamingRoutes from './streaming.routes';

import { StatusCodes } from 'http-status-codes';

const router: Router = Router();

router.use('/user', userRoutes);
router.use('/streaming', streamingRoutes);

router.use('/', (_: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: 'Hello world!' });
});

export default router;