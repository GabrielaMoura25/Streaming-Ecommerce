import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { IStreaming } from '../../interfaces/IStreaming';
import Streaming from '../../models/Streaming';
import User from '../../models/User';

type QueryParams = { limit?: number; offset?: number };

export const getAllStreamings = async (req: Request, res: Response) => {
  try {
    const { limit }: QueryParams = req.query || 10;
    const { offset }: QueryParams = req.query || 0;
    const streamings: IStreaming[] = await Streaming.findAll({
      limit,
      offset,
      include: User
    });

    if (!streamings || streamings.length <= 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: 'Data not found',
      });
      return;
    }

    res.status(StatusCodes.OK).json(streamings);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error when fetching streamings',
      error: error.message,
    });
  }
};
