"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("OrderItems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      order_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Orders", key: "id" },
        onDelete: "CASCADE",
      },
      uslugaPrice_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "UslugaPrices", key: "id" },
        onDelete: "CASCADE",
      },
      date: { type: Sequelize.DATE, allowNull: true },
      service_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Services", key: "id" },
        onDelete: "CASCADE",
      },
      isClosed: {
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
    await queryInterface.dropTable("OrderItems");
  },
};
