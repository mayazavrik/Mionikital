const router = require('express').Router();
const { Service } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email.trim() && password.trim()) {
      const service = await Service.findOne({ where: { email } });
      if (service && service.password === password) {
        res.json({ message: 'success', service });
      } else {
        res.json({ message: 'Неверный логин или пароль' });
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
