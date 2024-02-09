import 'dotenv/config';
import express, { Request, Response } from 'express';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/', (_: Request, res: Response) => {
  res.json({ message: 'Projeto inicializado!' });
});

export default server;