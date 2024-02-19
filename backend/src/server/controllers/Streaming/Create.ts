import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { IStreaming } from '../../interfaces/IStreaming';
import { StreamingSchema } from '../../validations/validatedStreaming';

import Streaming from '../../models/Streaming';

export const createStreaming = async (req: Request, res: Response) => {
  const dataStreaming: IStreaming = req.body;
  const image: Express.Multer.File | undefined = req.file;
  dataStreaming.photo = image?.filename;

  if (!dataStreaming) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Data not found'
    });
    return;
  }

  try {
    const streamingValidated = await StreamingSchema.validate(dataStreaming);

    await Streaming.create(streamingValidated);

    res.status(StatusCodes.CREATED).json(streamingValidated);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error when creating a new streaming record',
      validator: error.errors,
    });
  }
};