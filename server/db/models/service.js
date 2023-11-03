'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate({ Post, Comment, Rate, Sale, UslugaPrice }) {
      this.hasMany(Post, { foreignKey: 'service_id' });
      this.hasMany(Comment, { foreignKey: 'service_id' });
      this.hasMany(Rate, { foreignKey: 'service_id' });
      this.hasMany(Sale, { foreignKey: 'service_id' });
      this.hasMany(UslugaPrice, { foreignKey: 'service_id' });
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
        allowNull: false,
        type: DataTypes.TEXT,
      },
      tarif: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
