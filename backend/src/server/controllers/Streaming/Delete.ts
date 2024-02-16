import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { IStreaming } from '../../interfaces/IStreaming';

import Streaming from '../../models/Streaming';

export const deleteStreamingById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'ID not provided'
      });
    }

    const streamingExists: IStreaming | null = await Streaming.findByPk(id);

    if (!streamingExists) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Streaming not found'
      });
    }

    await Streaming.destroy({ where: { id } });

    return res.status(StatusCodes.OK).json({ message: 'Streaming deleted successfully' });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error deleting record',
      error: error.message
    });
  }
};
