'use strict';
const { Doctor } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const doctorsData = [
      {
        title: "Ян Марунов",
        img: "https://sun9-7.userapi.com/impg/j1dFB8JrRXpyBDxbpx8JS_hPudu0Z4Nht7_HWQ/IIxfowmYljc.jpg?size=853x864&quality=95&sign=a1a1227985dfb11f925fc4f7ec2966d9&type=album",
        about: "Стаж 10 лет.\nОбразование НГУ им. П.Ф. Лесгафта: «Физическая реабилитация».\nМедицинское образование.\Повышение квалификации СЗГМУ и И.И. Мечникова «Лечебная физкультура в системе медицинской реабилитации».\nИнститут спортивной и восстановительной медицины.\n«Массаж Щецова А.В.».\nМануальная терапия Елифанова А.В.\nТейпирование RockTape.\nМедицинская академия остеопатического образования.",
      },
      {
        title: "Екатерина Михайлова",
        img: "https://sun9-56.userapi.com/impg/YvlPbkN0sF7NITvOuqb3vGieTpQze0O3y9OGVQ/_a7_ptBKuy0.jpg?size=870x860&quality=95&sign=6a221c04bf0410a57d596d37a93f8aad&type=album",
        about: "Стаж 5 лет,специализация массаж/спа.\nВедущий специалист спа в Hilton.КМС по байдарочному спорту.\nХодила на каяках по камчатке",
      },
   
      {
        title: "Алексей Куперман",
        img: "https://sun9-67.userapi.com/impg/tUhwjm38x2F8mhlAEEc0DC12u12UJl2PWTTVHA/7bCmqXJ1czc.jpg?size=864x860&quality=95&sign=a0d52edf97ac9a4809c560d341422ad2&type=album",
        about: "Мастер с 10-летним стажем.\nСпециализируется на общем восстановительном массаже, расслабляющем массаже, силовом релаксе, а также массаже предплечий.\nПолучил образование в Академии физической и реабилитационной медицины.\nТакже обучался в Институте спортивной и восстановительной медицины А.В. Шевцова.\n",
      },
      {
        title: "Елена Сибикина",
        img: "https://sun9-45.userapi.com/impg/lsz2YwSBvOQ7Tq9O4Ej-Vu1PeGlZ54cyu7tD9w/8_PW2LLWYP8.jpg?size=859x863&quality=95&sign=699f1577444413d9f1f0b55a561dfb19&type=album",
        about: "Стаж 6 лет.\nТайский классический - для тех кто любит и хочет глубокой проработки мышц.\nУлучшает работу лимфатической кровеносной системы, нормализует гормональный фон, помогает снять спазмы и боли в теле и душе.\nРасслабляющий массаж - даст возможность отдохнуть, расслабиться.\nВысшее образование Юридический факультет / Психология.",
      },
      {
        title: "Балашова Марина",
        img: "https://sun9-2.userapi.com/impg/BNnlHEo4rcRhASp0jK7OtAQsy_BkcamMCaUguA/oRROv20AHGY.jpg?size=866x860&quality=95&sign=22aeeb9a1cfeae8a6d49a97f325c28fa&type=album",
        about: "Стаж более 6 лет\nОбразование: Среднее медицинское - фельдшер\nЛюблю работать с мышцами, находить в них напряжение, разогревать и разминать.\nПо лицу работаю в лимфодренажных и скульптурирующих техниках.\nОпыт в массаже 6 лет.\nПо образованию - фельдшер скорой помощи.\nПроходила курсы классического, медицинского, черепно-краниального массажа, испанского хиромассажа.",
      },
      {
        title: "Максимов Андрей",
        img: "https://sun6-20.userapi.com/impg/eFYR6qyhcf7iFt2xAd0skExgH5I2SyBuFDn1ZA/tQHYu10_MPw.jpg?size=869x867&quality=95&sign=0142b9f864b1814a7abb180c10f142c1&type=album",
        about: "Индивидуальный подход и тщательная послойная проработка мышечных волокон преимущественно пальцами.\nПрактикующий стаж 9 лет.\nОбразование: НГУ им. П.Ф. Лесгафта.\n«Физическая реабилитация.\nИнститут спортивной и восстановительной медицины.",
      },
      
    ];
    await Doctor.bulkCreate(doctorsData);
  },

  async down (queryInterface, Sequelize) {
    await Doctor.destroy({ truncate: { cascade: true } });
  }
};
