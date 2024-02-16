import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { IStreaming } from '../../interfaces/IStreaming';
import { StreamingSchema } from '../../validations/validatedStreaming';

import Streaming from '../../models/Streaming';

export const updateStreamingById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dataStreaming: IStreaming = req.body;

    if (!id) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'ID not provided'
      });
    }

    if (!dataStreaming) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Data not provided'
      });
    }

    const streamingExists: IStreaming | null = await Streaming.findByPk(id);

    if (!streamingExists) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Streaming not found'
      });
    }

    const streamingValidated = await StreamingSchema.validate(dataStreaming);

    await Streaming.update(streamingValidated, { where: { id } });

    return res.status(StatusCodes.OK).json(streamingValidated);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error updating streaming',
      error: error.message
    });
  }
};
