'use strict';
const { CarModel } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const modelData = [
      {
        id: 1,
        title: 'X5',
        mark_id: 1,
      },
      {
        id: 2,
        title: 'X7',
        mark_id: 1,
      },
      {
        id: 3,
        title: 'm3',
        mark_id: 1,
      },
      {
        id: 4,
        title: 'A5',
        mark_id: 2,
      },
      {
        id: 5,
        title: 'A6',
        mark_id: 2,
      },
      {
        id: 6,
        title: 'Q7',
        mark_id: 2,
      },
      {
        id: 7,
        title: 'Corolla',
        mark_id: 3,
      },
      {
        id: 8,
        title: 'Land cruiser',
        mark_id: 3,
      },
      {
        id: 9,
        title: 'Camry',
        mark_id: 3,
      },
    ];
    await CarModel.bulkCreate(modelData);
  },

  async down(queryInterface, Sequelize) {
    await CarModel.destroy({ truncate: { cascade: true } });
  },
};
