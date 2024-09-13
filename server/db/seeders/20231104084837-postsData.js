"use strict";
const { Post } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const postsData = [
      {
        title:"10 000 шагов — миф или реальность?",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/3488572/pub_608d1399a1d0372adab2059f_608d25d727eea241e48eaa7e/scale_1200",
        text: "Давайте разберемся откуда к нам пришла информация с такой цифрой.\n В 1965 году бренд Yamasa Clock презентовал новинку — шагомер «Manpo-Kei», что переводится на русский как «10 000 шагов». Современные фитнес-трекеры часто запрограммированы именно на такое количество шагов.\nНужно ли гнаться за цифрами?\n Обычный человек делает ежедневно около 2 700 шагов. Результат будет заметен, если постепенно наращивать эту цифру.\n4 400 шагов – заметно укрепляют организм и повышают качество жизни\n5 000 шагов – организм замедляет отложение жира в организме\n ✅ Ходите в стельках FizioStep!\nС их помощью корректируется техника движений, упрощается поддержание равновесия, что позволяет увеличить силу отталкивания и работоспособность в целом. Снижается риск травм благодаря правильному распределению нагрузки на суставы.",
      },
      {
        title:"Почему во время работы сидя отекают ноги?",
        img: "https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2021-09/Depositphotos_22954924_xl-2015.jpg?itok=xdbxMudl",
        text: "Из-за длительного сидения, отток крови значительно замедляется.Как понять, что у вас отек ног?\n– обувь к вечеру становится тесной\n– на лодыжках видны следы от резинок носков\n– при надавливании на коже образуется долго не исчезающая вмятина\n– вены на ступнях становятся незаметны\n– возникает чувство тяжести в ногах\n– видна припухлость нижних конечностей\n– наблюдается умеренная болезненность при пальпации\n👨‍💻 Если вы работаете сидя, не закидывайте ногу на ногу, расслабьте шнуровку обуви. Чаще вставайте и делайте разминку или небольшую прогулку по помещению. А если это делать в наших стельках, то эффект будет куда заметнее. Мы разработали специальную конструкцию, которая активизирует кровообращение.\n✅ Чтобы снизить боль после работы, ходите в стельках FizioStep. Силиконовые опоры действуют как маленькие пружины, создают массажный эффект, который активизирует кровообращение. Это уберет боль в ногах, снизит вероятность появления варикоза.",
      },
     
    ];
    await Post.bulkCreate(postsData);
  },

  async down(queryInterface, Sequelize) {
    await Post.destroy({ truncate: { cascade: true } });
  },
};
