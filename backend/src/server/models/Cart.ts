import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/connection';
import User from './User'; 
import Streaming from './Streaming'; 
import { ICart } from '../interfaces/ICart';

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
      key: 'id',
    },
  },
  streamingId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Streaming, 
      key: 'id',
    },
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
  tableName: 'cart',
  modelName: 'Cart'
});

User.hasMany(Cart, { foreignKey: 'userId' });
Streaming.hasMany(Cart, { foreignKey: 'streamingId' });

// sequelize.sync().then(() => {
//   console.log('Synchronized streaming database');
// });

export default Cart;
