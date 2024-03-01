import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICart } from '../../interfaces/ICart';
import Cart from '../../models/Cart';

export const getAllCarts = async (_: Request, res: Response) => {
  try {
    const carts: ICart[] = await Cart.findAll();

    console.log(carts);

    if (!carts|| carts.length <= 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: 'Data not found'
      });
      return;
    }

    res.status(StatusCodes.OK).json(carts);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error when fetching carts',
      error: error.message
    });
  }
};
