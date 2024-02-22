import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import path from 'path';

export const getPhotos = (req: Request, res: Response) => {
  try {
    const { photoName } = req.params;

    if (!photoName || photoName === 'undefined') {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid photo name' });
    }

    const photoPath = path.join(__dirname, `../../upload/images/${photoName}`);

    console.log(photoPath);

    res.sendFile(photoPath);
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error accessing images',
      error: error.message
    });
  }
};