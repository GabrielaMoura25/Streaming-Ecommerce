import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { IUser } from '../../interfaces/IUser';

import User from '../../models/User';

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'ID not provided'
      });
    }

    const userExists: IUser | null = await User.findByPk(id);

    if (!userExists) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'User not found'
      });
    }

    await User.destroy({ where: { id } });

    return res.status(StatusCodes.OK).json({ message: 'User deleted successfully' });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error deleting record',
      error: error.message
    });
  }
};
