import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICart } from '../../interfaces/ICart';
import Cart from '../../models/Cart';
import { CartSchema } from '../../validations/validateCart';

export const updateCartById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dataCart: ICart = req.body;

    if (!id) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'ID not provided'
      });
    }

    if (!dataCart) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Data not provided'
      });
    }

    const cartExists: ICart | null = await Cart.findByPk(id);

    if (!cartExists) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Cart not found'
      });
    }

    const cartValidated = await CartSchema.validate(dataCart);

    await Cart.update(cartValidated, { where: { id } });

    return res.status(StatusCodes.OK).json(cartValidated);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error updating cart',
      error: error.message
    });
  }
};
