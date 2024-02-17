import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICart } from 'src/server/interfaces/ICart';
import Cart from 'src/server/models/Cart';

export const deleteCartById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'ID not provided'
      });
    }

    const cartExists: ICart| null = await Cart.findByPk(id);

    if (!cartExists) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Streaming not found'
      });
    }

    await Cart.destroy({ where: { id } });

    return res.status(StatusCodes.OK).json({ message: 'Deleted successfully' });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error deleting record',
      error: error.message
    });
  }
};
