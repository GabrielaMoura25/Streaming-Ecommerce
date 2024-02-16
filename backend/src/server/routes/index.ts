import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import userRoutes from './user.routes';
import streamingRoutes from './streaming.routes';


import authenticated from '../middlewares/authenticated';

const router: Router = Router();

router.use('/login', authenticated);

router.use('/user', userRoutes);
router.use('/streaming', streamingRoutes);

router.use('/', (_: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: 'Hello world!' });
});

export default router;