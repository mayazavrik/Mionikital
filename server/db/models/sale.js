'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    static associate() {
      
    }
  }
  Sale.init(
    {
    
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Sale',
    }
  );
  return Sale;
};
