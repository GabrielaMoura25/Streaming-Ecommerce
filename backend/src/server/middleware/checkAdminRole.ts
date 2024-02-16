import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import User from '../models/User';

export const checkAdminRole = async (req: Request, res: Response, next: NextFunction) => {
  const userId: string = req.body.userId;

  if (!userId) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'userId is required' });
  }

  try {
    const user = await User.findOne({ where: { id: userId } });
    console.log("Middleware: ", user);

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
    }

    if (user.role !== 'admin') {
      return res.status(StatusCodes.FORBIDDEN).json({ message: 'User is not an admin' });
    }

    next();
  } catch (error) {
    console.error('Error in checkAdminRoleMiddleware:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
  }
};
