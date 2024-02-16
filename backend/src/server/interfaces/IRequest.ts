import { Request } from 'express';
import jwt from 'jsonwebtoken';

export interface IRequest extends Request {
  token?: string,
  user?: string | jwt.JwtPayload
}