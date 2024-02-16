import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import authenticated from '../middlewares/authenticated';
import userRoutes from './user.routes';

const router: Router = Router();

router.use('/login', authenticated);

router.use('/user', userRoutes);

router.use('/', (_: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: 'Hello world!' });
});

export default router;