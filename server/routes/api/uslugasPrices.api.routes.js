const { UslugaPrice } = require('../../db/models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const uslugasPrices = await UslugaPrice.findAll();
    res.json(uslugasPrices);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.delete('/:uslugaPriceId', async (req, res) => {
  try {
    const { uslugaPriceId } = req.params;
    const result = await UslugaPrice.destroy({ where: { id: +uslugaPriceId } });
    if (result > 0) {
      res.json(+uslugaPriceId);
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.put('/:uslugaPriceId', async (req, res) => {
  try {
    const { uslugaPriceId } = req.params;
    const { mark_id, carModel_id, cost, usluga_id } = req.body;
    const [result] = await UslugaPrice.update(
      { mark_id, carModel_id, cost, usluga_id },
      { where: { id: +uslugaPriceId } }
    );
    console.log(result);
    if (result > 0) {
      res.json(req.body);
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
module.exports = router;
