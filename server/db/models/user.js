'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comment, Rate, Order }) {
      this.hasMany(Comment, { foreignKey: 'user_id' });
      this.hasMany(Rate, { foreignKey: 'user_id' });
      this.hasMany(Order, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      phone: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      isAdmin: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
