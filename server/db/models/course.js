'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Course.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    visit: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    text: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};