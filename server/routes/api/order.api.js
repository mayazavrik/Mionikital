const router = require("express").Router();
const { Order } = require("../../db/models");
const { OrderItem } = require("../../db/models");
const { User } = require("../../db/models");
const { UslugaPrice } = require("../../db/models");
const { Usluga } = require("../../db/models");
const { CarModel } = require("../../db/models");
const { Mark } = require("../../db/models");

router.post("/", async (req, res) => {
  try {
    const { user_id, service_id, data, uslugaPrice_id } = req.body;

    const activeOrder = await Order.findOne({
      where: {
        user_id: user_id,
      },
    });

    if (!activeOrder) {
      const order = await Order.create({
        user_id: user_id,
      });
      console.log(order.id);
      const orderItem = await OrderItem.create({
        order_id: order.id,
        uslugaPrice_id: uslugaPrice_id,
        date: data,
        service_id,
      });
      console.log(orderItem);
      const item = await OrderItem.findOne({
        where: { id: orderItem.id },
        include: [
          { model: UslugaPrice, include: [Usluga, CarModel, Mark] },
          { model: Order },
        ],
      });
      res.status(200).json(item);
    }

    if (activeOrder) {
      const active = await OrderItem.findOne({
        where: { order_id: activeOrder.id, uslugaPrice_id, isClosed: false },
      });
      if (active) {
        res.json({ message: "У вас уже есть активная запись на эту услугу" });
      } else {
        const orderItem = await OrderItem.create({
          order_id: order.id,
          uslugaPrice_id: uslugaPrice_id,
          date: data,
        });
        const item = await OrderItem.findOne({
          where: { id: orderItem.id },
          include: { model: UslugaPrice, include: [Usluga, CarModel, Mark] },
        });
        res.status(200).json({ item });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/", async (req, res) => {
  const orders = await Order.findAll();
  res.status(200).json(orders);
});

module.exports = router;
