import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import fs from 'fs/promises';
import path from 'path';

import { IStreaming } from '../../interfaces/IStreaming';
import { StreamingSchema } from '../../validations/validatedStreaming';

import Streaming from '../../models/Streaming';

export const updateStreamingById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dataStreaming: IStreaming = req.body;
    const image: Express.Multer.File | undefined = req.file;
    dataStreaming.photo = image?.filename;

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

    if (streamingExists.photo) {
      const imagePath: string = path.join(__dirname, `../../upload/images/${streamingExists.photo}`);
      try {
        await fs.access(imagePath);
        await fs.unlink(imagePath);
      } catch (error: any) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          message: 'Error deleting image',
          error: error.message
        });
      }
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
