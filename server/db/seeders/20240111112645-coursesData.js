"use strict";
const { Course } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const coursesData = [
			{
        title: "Осанка",
				visit: 5,
				text: " эффективная работа на уровне  мускулатуры, связок и суставов создаст условия для исчезновения нежелательных паттернов статико-динамического стереотипа. ",
				price:15000,
			
			},
      {
        title: "Фигура",
				visit: 8,
				text: "Прицельно направленное воздействие позволит достичь нужных линий силуэта, повысить тонус эпидермиса. Невероятно богат на ощущения. ",
				price: 15000,
			
			},
      {
        title: "Забота",
				visit: 5,
				text: "Стабилизирует психоэмоциональное состояние, повышает сопротивляемость к неблагоприятным факторам внешней среды. Имеет ярко выраженный успокаивающий эффект.",
				price:15000,
			
			},
		
		];
		await Course.bulkCreate(coursesData);
	},

	async down(queryInterface, Sequelize) {
		await Course.destroy({ truncate: { cascade: true } });
	},
};