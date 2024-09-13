const router = require('express').Router();
const { Course } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const courses = await Course.findAll({ raw: true });
    res.json(courses);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/:courseId', async (req, res) => {
  try {
    const course = await Course.findOne({
      raw: true,
      where: { id: req.params.courseId },
    });
    res.json(course);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, visit, text, price } = req.body;
    const course = await Course.create({
      title:title,
      visit: visit,
      text: text,
      price:price,
    });
    res.status(201).json(course); // Изменим статус на 201 для создания ресурса
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete('/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;
    const result = await Course.destroy({ where: { id: +courseId } });
    console.log('========');
    if (result > 0) {
      res.json(+courseId);
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, visit, text, price } = req.body;
    const [result] = await Course.update(
      {
        title,
        visit,
        text,
        price,
      },
      { where: { id: courseId } }
    );
    if (result > 0) {
      const course = await Course.findOne({ where: { id: +courseId } });
      res.json(course);
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
