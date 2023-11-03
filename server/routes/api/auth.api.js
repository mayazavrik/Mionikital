const router = require('express').Router();
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (email.trim() && password.trim() && name.trim()) {
      const userFind = await User.findOne({ where: { email } });
      if (!userFind) {
        const user = await User.create({ email, password, name });
        res.json({ message: 'success', user });
      } else {
        res.json({ message: 'Такой пользователь уже существует' });
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
