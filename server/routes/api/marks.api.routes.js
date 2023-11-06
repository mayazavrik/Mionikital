const { Mark, CarModel } = require('../../db/models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const marks = await Mark.findAll({ include: { model: CarModel } });
    res.json(marks);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
