"use strict";
const { User } = require("../models");
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const usersData = [
      {
        name: "YanIsTheBest",
        email: "ymarunov@yandex.ru",
        password: await bcrypt.hash("6naffSwyxq", 10),
        isAdmin: true,
      },
      {
        name: "JohnDoe",
        email: "2@2",
        password: await bcrypt.hash("123", 10),
        isAdmin: false,
      },

    ];
    await User.bulkCreate(usersData);
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ truncate: { cascade: true } });
  },
};
