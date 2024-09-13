"use strict";
const { Usluga } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const uslugasData = [
			{
				img: "https://avatars.dzeninfra.ru/get-zen_doc/8251857/pub_63e7592277549205977bf4da_63e759340f346c5c36c93fad/scale_1200",
				title: "Общий массаж",
				text: "Общий массаж представляет собой механическое воздействие на тело с помощью комбинации специальных приемов - давления, похлопываний, растираний, благодаря которым оказывается мощное влияние на кожу, органы и ткани организма. Классический массаж всегда выполняется руками.",
				price:3100,
				price2:4300,
			},
			{
				img: "https://vam-zdorovie.ru/upload/iblock/fe0/0f4f80969ca1e5d789371c0df09f4d56.jpeg",
				title: "Оздоровительный массаж",
				text: "Данный вид массажа направлен прежде всего на мягкое улучшение работы всех внутренних органов и систем организма. Он помогает избавиться от усталости и стресса, восстановить работоспособность, активизировать все обменные процессы в теле и улучшить общее состояние организма.",
				price:3100,
				price2:4300,
			},
			{
				img: "https://spataimir.ru/wp-content/uploads/2019/10/Дизайн-без-названия-37.png",
				title: "Тайский массаж",
				text: "Традиционный тайский массаж или тайский йога-массаж — это традиционная терапия, сочетающая точечный массаж, индийские аюрведические принципы и вспомогательные позы йоги.",
				price:3100,
				price2:4300,
			},
			{
				img: "https://darmed-clinic.ru/wp-content/uploads/2023/01/klassicheskiy-massazh-tela.webp",
				title: "Расслабляющий массаж",
				text: "Антистресс-массаж мягко воздействует на мышцы лица, спины, шеи и рефлекторные зоны стоп. Снимает стресс, убирает тревожность, успокаивает. ",
				price:3100,
				price2:4300,
			},
		];
		await Usluga.bulkCreate(uslugasData);
	},

	async down(queryInterface, Sequelize) {
		await Usluga.destroy({ truncate: { cascade: true } });
	},
};
