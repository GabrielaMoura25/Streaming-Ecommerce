import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import { IUser } from '../../interfaces/IUser';
import { UserSchema } from '../../validations/validatedUser';

import User from '../../models/User';

export const updateUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dataUser: IUser = req.body;

    if (!id) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'ID not provided'
      });
    }

    if (!dataUser) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Data not provided'
      });
    }

    const userExists: IUser | null = await User.findByPk(id);

    if (!userExists) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'User not found'
      });
    }

    const passwordHash = await bcrypt.hash(dataUser.password, 10);
    dataUser.password = passwordHash;

    const userValidated = await UserSchema.validate(dataUser);

    await User.update(userValidated, { where: { id } });

    return res.status(StatusCodes.OK).json(userValidated);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error updating user',
      error: error.message
    });
  }
};
