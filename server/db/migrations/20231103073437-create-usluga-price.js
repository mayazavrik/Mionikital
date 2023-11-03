'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UslugaPrices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      usluga_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Uslugas', key: 'id' },
        onDelete: 'CASCADE',
      },
      service_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Services', key: 'id' },
        onDelete: 'CASCADE',
      },
      cost: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      mark_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Marks', key: 'id' },
        onDelete: 'CASCADE',
      },
      carModel_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'CarModels', key: 'id' },
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('UslugaPrices');
  },
};
