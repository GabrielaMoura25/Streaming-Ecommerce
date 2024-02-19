import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import fs from 'fs/promises';
import path from 'path';

export const downloadImage = async (req: Request, res: Response): Promise<void> => {
  const { fileName } = req.params;
  const imagePath: string = path.join(__dirname, `../../images/${fileName}`);

  try {
    await fs.access(imagePath);

    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.setHeader('Content-Type', 'image/jpeg');

    const fileStream: fs.FileHandle = await fs.open(imagePath, 'r');
    const fileBuffer: Buffer = await fileStream.readFile();
    res.send(fileBuffer);
    await fileStream.close();
  } catch (error: any) {
    res.status(StatusCodes.NOT_FOUND).json({
      message: 'File not found',
      error: error.message
    });
  }
};