const router = require('express').Router();
const { Post } = require('../../db/models');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null, 'public/img');
  },
  filename: function(req,file,cb){
    cb(null, file.originalname);
  },
})
const upload = multer({storage});


router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({ raw: true });
    res.json(posts);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findOne({
      raw: true,
      where: { id: req.params.postId },
    });
    res.json(post);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/',upload.single('img'), async (req, res) => {
  try {
    const { title,  text } = req.body;
    const imgPath = `/img/${req.file.filename}`; 
    const post = await Post.create({
      title:title,
      img: imgPath,
      text: text,
      
    });
    res.status(201).json(post); // Изменим статус на 201 для создания ресурса
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete('/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
    const result = await Post.destroy({ where: { id: +postId } });
    console.log('========');
    if (result > 0) {
      res.json(+postId);
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:id', upload.single('img'), async (req, res) => {
  try {
    const { id } = req.params;
    const { title,  text } = req.body;
    const img = req.file ? `/img/${req.file.filename}` : null;
    const [updated] = await Post.update(
      {
        title,
        img,
        text,
      },
      { where: { id: +id } }
    );
    if (updated) {
      const updatedPost = await Post.findOne({ where: { id: +id }});
      res.json(updatedPost);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
