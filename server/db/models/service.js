"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate({ Comment, Rate, Sale, UslugaPrice, OrderItem }) {
      this.hasMany(Comment, { foreignKey: "service_id" });
      this.hasMany(Rate, { foreignKey: "service_id" });
      this.hasMany(Sale, { foreignKey: "service_id" });
      this.hasMany(UslugaPrice, { foreignKey: "service_id" });
      this.hasMany(OrderItem, { foreignKey: "service_id" });
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
        defaultValue:
          "https://cdn.dribbble.com/users/3726898/screenshots/15573342/media/bb37303858daeb66317d375a7b5a64a8.gif",
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
      modelName: "Service",
    }
  );
  return Service;
};
