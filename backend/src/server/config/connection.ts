import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/server/database/streaming.sqlite',
  logging: false
});