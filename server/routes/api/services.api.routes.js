const router = require('express').Router();
const { Usluga } = require('../../db/models');

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
    const uslugas = await Usluga.findAll();
    res.json(uslugas);
  } catch ({ message }) {
    res.json({ message });
  }
});
router.post('/',upload.single('img'), async (req, res) => {
  try {
    const {title, text, price, price2 } = req.body;
    console.log(req.file);
    const imgPath = `/img/${req.file.filename}`; 
   
  
    const service = await Usluga.create({
      title:title,
      img: imgPath, 
      text: text,
      price:price,
      price2:price2,
    });
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.delete('/:serviceId', async (req, res) => {
  try {
    const { serviceId } = req.params;
    const result = await Usluga.destroy({ where: { id: +serviceId } });
    console.log('========');
    if (result > 0) {
      res.json(+serviceId);
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});
// router.put('/:serviceId', async (req, res) => {
//   try {
//     const { serviceId } = req.params;
//     const { title, img, text,price,price2,} = req.body;
//     const [result] = await Usluga.update(
//       {
//         title,
//         img,
//         text,
//         price,
//       price2,
//       },
//       { where: { id: serviceId } }
//     );
//     if (result > 0) {
//       const service = await Usluga.findOne({ where: { id: +serviceId } });
//       res.json(service);
//     }
//   } catch ({ message }) {
//     res.json({ message });
//   }
// });
router.put('/:id', upload.single('img'), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, price, price2 } = req.body;
    const img = req.file ? `/img/${req.file.filename}` : null;

    // Обновление данных услуги в базе данных
    const [updated] = await Usluga.update(
      { title, text, price, price2, img },
      { where: { id: +id } }
    );

    if (updated) {
      const updatedService = await Usluga.findOne({ where: { id: +id } });
      res.json(updatedService);
    } else {
      res.status(404).json({ message: 'Service not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;