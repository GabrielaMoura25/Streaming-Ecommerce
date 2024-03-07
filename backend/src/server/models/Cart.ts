import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../config/connection';
import { ICart } from '../interfaces/ICart';

import User from './User';
import Streaming from './Streaming';
class Cart extends Model implements ICart {
  id!: string;
  userId!: string;
  streamingId!: string;
  quantity!: number;
  price!: number;
}

Cart.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  streamingId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Streaming,
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2), 
    allowNull: false,
  } 
}, {
  sequelize,
  tableName: 'carts',
  modelName: 'Cart'
}); 

User.hasOne(Cart, { foreignKey: 'userId', as: 'user' });
Cart.belongsTo(User, { foreignKey: 'userId' });

Cart.hasMany(Streaming, { foreignKey: 'cartId', as: 'streamings' });
Streaming.belongsTo(Cart, { foreignKey: 'cartId' });

// sequelize.sync().then(() => {
//   console.log('Synchronized cart database');
// });

export default Cart;
