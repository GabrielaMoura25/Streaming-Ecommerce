import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Cart from '../../models/Cart';
import User from '../../models/User';
// import Streaming from '../../models/Streaming';

import { ICart } from '../../interfaces/ICart';
import { IUser } from '../../interfaces/IUser';

export const getAllCarts = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'User ID is required',
      });
    }

    const userExists: IUser | null = await User.findByPk(userId);

    if (!userExists) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'User not found',
      });
    }

    const carts: ICart[] = await Cart.findAll({
      where: {
        userId,
      },
      include: {
        model: User
      },
    });

    console.log(carts);

    if (!carts || carts.length <= 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: 'Data not found',
      });
      return;
    }

    res.status(StatusCodes.OK).json(carts);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error when fetching carts',
      error: error.message,
    });
  }
};
