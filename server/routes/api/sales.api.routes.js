const router = require('express').Router();
const { Sale } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { id, img, text } = req.body;
    if ((img.trim(), text.trim())) {
      const sale = await Sale.create({ service_id: id, img, text });
      console.log(sale);
      res.status(200).json(sale);
    } else {
      res.json('Заполните все поля');
    }
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
