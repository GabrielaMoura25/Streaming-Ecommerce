import { Router, Request, Response } from 'express';

import userRoutes from './user.routes';
import { StatusCodes } from 'http-status-codes';

const router: Router = Router();

router.use('/user', userRoutes);

router.use('/', (_: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: 'Hello world!' });
});

export default router;