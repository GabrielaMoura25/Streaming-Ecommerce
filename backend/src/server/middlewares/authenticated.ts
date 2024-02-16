import 'dotenv/config';
import { Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/User';
import { IUser } from '../interfaces/IUser';
import { IRequest } from '../interfaces/IRequest';

const authenticated = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const { email, password }: IUser = req.body;

    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Email and password are required!',
      });
    }

    const secret = process.env.SECRET;

    console.log(secret);

    if (!secret) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Secret not configured properly!',
      });
    }

    const userExists: IUser | null = await User.findOne({ where: { email } });

    if (!userExists) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'User not found!',
      });
    }

    const validatedPassword = await bcrypt.compare(password, userExists.password);

    if (!validatedPassword) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Invalid password!',
      });
    }

    const payload = {
      id: userExists.id,
      email: userExists.email,
      role: userExists.role
    };

    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    req.token = token;



    res.status(StatusCodes.OK).json({
      message: 'User authenticated',
      userId: userExists.id,
      token: token,
    });

    next();

  } catch (error: any) {
    console.error('Error creating token:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error generate token',
      error: error.errors,
    });
  }
};

export default authenticated;