import 'dotenv/config';
import { Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import { IRequest } from '../interfaces/IRequest';

const validateToken = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Authorization token not found in headers'
      });
    }

    const secret = process.env.SECRET;

    if (!secret) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Secret not configured properly!',
      });
    }

    const decoded = jwt.verify(token, secret);
    req.user = decoded;

    next();
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error validating token',
      error: error.errors,
    });
  }
};

export default validateToken;