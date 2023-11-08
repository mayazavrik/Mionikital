"use strict";
const { CarModel } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const modelData = [
      {
        title: "X5",
        mark_id: 1,
      },
      {
        title: "X7",
        mark_id: 1,
      },
      {
        title: "m3",
        mark_id: 1,
      },
      {
        title: "A5",
        mark_id: 2,
      },
      {
        title: "A6",
        mark_id: 2,
      },
      {
        title: "Q7",
        mark_id: 2,
      },
      {
        title: "Corolla",
        mark_id: 3,
      },
      {
        title: "Land cruiser",
        mark_id: 3,
      },
      {
        title: "Camry",
        mark_id: 3,
      },
    ];
    await CarModel.bulkCreate(modelData);
  },

  async down(queryInterface, Sequelize) {
    await CarModel.destroy({ truncate: { cascade: true } });
  },
};
