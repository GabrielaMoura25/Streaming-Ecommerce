import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import { IUser } from '../../interfaces/IUser';
import { UserSchema } from '../../validations/validatedUser';

import User from '../../models/User';

export const createUser = async (req: Request, res: Response) => {
  const dataUser: IUser = req.body;

  if (!dataUser) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Data not found'
    });
    return;
  }

  const passwordHash = await bcrypt.hash(dataUser.password, 10);
  dataUser.password = passwordHash;

  try {
    const userValidated = await UserSchema.validate(dataUser);

    await User.create(userValidated);

    res.status(StatusCodes.CREATED).json(userValidated);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error when creating a new record',
      validator: error.errors,
    });
  }
};