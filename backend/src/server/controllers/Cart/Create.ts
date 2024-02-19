import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CartSchema } from '../../validations/validateCart';
import { ICart } from '../../interfaces/ICart';
import Cart from '../../models/Cart';

export const createCart = async (req: Request, res: Response) => {
  const dataCart: ICart = req.body;

  if (!dataCart) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Data not found'
    });
    return;
  }

  try {
    const cartValidated = await CartSchema.validate(dataCart);
    
    await Cart.create(cartValidated)

    res.status(StatusCodes.CREATED).json(cartValidated);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error in shopping cart',
      validator: error.errors,
    });
  }
};