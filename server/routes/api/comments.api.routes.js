const { Comment, User } = require('../../db/models');
const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    if (req.session.userId) {
      const { user_id, service_id, text } = req.body;
      if ((user_id, service_id, text.trim())) {
        const comment = await Comment.create({ user_id, service_id, text });
        const commentRes = await Comment.findOne({
          where: { id: comment.id },
          include: { model: User },
        });
        res.json(commentRes);
      }
    }
  } catch ({ message }) {
    res.json({ message });
  }
});
router.delete('/:commentId', async (req, res) => {
  try {
    console.log('////////');
    const { commentId } = req.params;
    console.log(commentId);
    const comment = await Comment.findOne({ where: { id: +commentId } });
    console.log(comment);
    const data = { comment_id: comment.id, service_id: comment.service_id };
    if (comment.user_id === req.session.userId) {
      const result = await Comment.destroy({ where: { id: +commentId } });
      if (result > 0) {
        res.json(data);
      }
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
