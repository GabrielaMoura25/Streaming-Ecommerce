import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { IUser } from '../../interfaces/IUser';
import User from '../../models/User';

export const getAllUsers = async (_: Request, res: Response) => {
  try {
  const users: IUser[] = await User.findAll();

  if (!users || users.length <= 0) {
    res.status(StatusCodes.NOT_FOUND).json({
      message: 'Data not found'
    });
    return;
  }

    res.status(StatusCodes.OK).json(users);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error when creating a new record',
      validator: error.errors,
    });
  }
};