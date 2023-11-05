const router = require("express").Router();
const { Service, Sale } = require("../../db/models");
router.get("/", async (req, res) => {
  const services = await Service.findAll({ include: { model: Sale } });
  res.json(services);
});

module.exports = router;
