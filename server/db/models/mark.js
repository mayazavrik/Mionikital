'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mark extends Model {
    static associate({ CarModel }) {
      this.hasMany(CarModel, { foreignKey: 'mark_id' });
    }
  }
  Mark.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Mark',
    }
  );
  return Mark;
};
