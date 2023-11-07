'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate({ Comment, Rate, Sale, UslugaPrice, Order }) {
      this.hasMany(Comment, { foreignKey: 'service_id' });
      this.hasMany(Rate, { foreignKey: 'service_id' });
      this.hasMany(Sale, { foreignKey: 'service_id' });
      this.hasMany(UslugaPrice, { foreignKey: 'service_id' });
      this.hasMany(Order, { foreignKey: 'service_id' });
    }
  }
  Service.init(
    {
      title: {
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
      adress: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      phone: {
        allowNull: false,
        type: DataTypes.TEXT,
        unique: true,
      },
      img: {
        type: DataTypes.TEXT,
      },
      tarif: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      coordinat: {
        type: DataTypes.TEXT,
      },
      isChecked: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Service',
    }
  );
  return Service;
};
