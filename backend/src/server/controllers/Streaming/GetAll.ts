import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { IStreaming } from '../../interfaces/IStreaming';
import Streaming from '../../models/Streaming';

export const getAllStreamings = async (_: Request, res: Response) => {
  try {
    const streamings: IStreaming[] = await Streaming.findAll();

    if (!streamings || streamings.length <= 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: 'Data not found'
      });
      return;
    }

    res.status(StatusCodes.OK).json(streamings);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error when fetching streamings',
      error: error.message
    });
  }
};
