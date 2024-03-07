import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CartSchema } from '../../validations/validateCart';
import { ICart } from '../../interfaces/ICart';

import Cart from '../../models/Cart';
import User from '../../models/User';
import Streaming from '../../models/Streaming';

export const createCart = async (req: Request, res: Response) => {
  const dataCart: ICart = req.body;

  console.log(dataCart);

  if (!dataCart.userId || !dataCart.streamingId) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Data not found',
    });
    return;
  }

  const userExists = User.findOne({ where: { id: dataCart.userId } });

  if (!userExists) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: 'User not exists',
    });
  }

  const streamingExists = Streaming.findOne({
    where: { id: dataCart.streamingId },
  });

  if (!streamingExists) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: 'Streaming not exists',
    });
  }

  try {
    const cartValidated = await CartSchema.validate(dataCart);

    await Cart.create(cartValidated);

    res.status(StatusCodes.CREATED).json(cartValidated);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error in shopping cart',
      validator: error.errors,
    });
  }
};
