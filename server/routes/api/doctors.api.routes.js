const router = require('express').Router();
const { Doctor } = require('../../db/models');

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
    const doctors = await Doctor.findAll({ raw: true });
    res.json(doctors);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/:doctorId', async (req, res) => {
  try {
    const doctor = await Doctor.findOne({
      raw: true,
      where: { id: req.params.doctorId },
    });
    res.json(doctor);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/',upload.single('img'), async (req, res) => {
  try {
    const { title, img, about} = req.body;
    const imgPath = `/img/${req.file.filename}`; 
    const doctor = await Doctor.create({
      title:title,
      img:imgPath,
      about: about,
     
    });
    res.status(201).json(doctor); // Изменим статус на 201 для создания ресурса
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete('/:doctorId', async (req, res) => {
  try {
    const { doctorId } = req.params;
    const result = await Doctor.destroy({ where: { id: +doctorId } });
    console.log('========');
    if (result > 0) {
      res.json(+doctorId);
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
    const { title,  about } = req.body;
    const img = req.file ? `/img/${req.file.filename}` : null;

    const [updated] = await Doctor.update(
      {
        title,
        img,
        about,
      
      },
      { where: { id: +id } }
    );
    if (updated ) {
      const updatedDoctor = await Doctor.findOne({ where: { id: +id } });
      res.json(updatedDoctor);
    } else {
      res.status(404).json({ message: 'Doctor not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
