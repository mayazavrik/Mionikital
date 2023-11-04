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

router.delete('/:saleId', async (req, res) => {
  try {
    const { saleId } = req.params;
    console.log(saleId);
    const sale = await Sale.findOne({ where: { id: +saleId } });
    if (sale) {
      const service_id = sale.service_id;
      const result = await Sale.destroy({ where: { id: +saleId } });
      if (result > 0) {
        res.json({ saleId: +saleId, service_id });
      }
    }
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
