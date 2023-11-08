"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Services", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      adress: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      phone: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: true,
      },
      img: {
        type: Sequelize.TEXT,
        defaultValue:
          "https://cdn.dribbble.com/users/3726898/screenshots/15573342/media/bb37303858daeb66317d375a7b5a64a8.gif",
      },
      tarif: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      coordinat: {
        type: Sequelize.TEXT,
      },
      isChecked: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Services");
  },
};
