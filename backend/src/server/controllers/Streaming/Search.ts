import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { IStreaming } from '../../interfaces/IStreaming';

import Streaming from '../../models/Streaming';

export const getStreamingByName = async (req: Request, res: Response) => {
  const { title } = req.query;

  if (!title) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Query is empty'
    });
  }

  const streaming: IStreaming[] = await Streaming.findAll({
    where: {
      title: {
        [Op.like]: `%${title}%`,
      }
    }
  });

  if (!streaming || streaming.length === 0) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: 'No streams were found'
    });
  }

  try {
    res.status(StatusCodes.OK).json(streaming);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error when searching for streaming',
      error: error.errors
    });
  }
}