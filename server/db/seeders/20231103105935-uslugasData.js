'use strict';
const { Usluga } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const uslugasData = [
      { id: 1, title: 'Техническое обслуживание' },
      { id: 2, title: 'Замена топливного фильтра ' },
      { id: 3, title: 'Замена сцепления DSG 7' },
      { id: 4, title: 'Промывка тормозной системы' },
      { id: 5, title: 'Ремонт радиатора автомобиля' },
      { id: 6, title: 'Ремонт двигателя' },
      { id: 7, title: 'Ремонт пневмоподвески' },
      { id: 8, title: 'Ремонт редуктора' },
      { id: 9, title: 'Замена цепи ГРМ' },
      { id: 10, title: 'Ремонт выхлопной системы' },
    ];
    await Usluga.bulkCreate(uslugasData);
  },

  async down(queryInterface, Sequelize) {
    await Usluga.destroy({ truncate: { cascade: true } });
  },
};
