const router = require("express").Router();
const { Sale} = require("../../db/models");


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

router.get("/", async (req, res) => {
	try {
		const sales = await Sale.findAll();

		res.json(sales);
	} catch ({ message }) {
		res.status(500).json({ message });
	}
});

router.post('/',upload.single('img'), async (req, res) => {
	try {
		const {  img, text } = req.body;
		const imgPath = `/img/${req.file.filename}`; 
	
			const sale = await Sale.create({  img:imgPath, text:text  });
			res.status(200).json(service);
		  } catch ({ message }) {
			res.status(500).json({ message });
		  }
		});

router.delete("/:saleId", async (req, res) => {
	try {
		const { saleId } = req.params;
		const sale = await Sale.findOne({ where: { id: +saleId } });
		if (sale) {
			
			const result = await Sale.destroy({ where: { id: +saleId } });
			if (result > 0) {
				res.json({ saleId: +saleId});
			}
		}
	} catch ({ message }) {
		res.json({ message });
	}
});
router.put('/:id', upload.single('img'), async (req, res) => {
	try {
		const { id } = req.params;
		const { text } = req.body;
		const img = req.file ? `/img/${req.file.filename}` : null;

		// Обновляем запись с использованием where
		const [updated] = await Sale.update(
			{ text, img },
			{ where: { id: +id } }
		);

		if (updated) {
			// Получаем обновленную запись с помощью findByPk (по первичному ключу)
			const updatedSale = await Sale.findByPk(+id);
			res.json(updatedSale);
		} else {
			res.status(404).json({ message: 'Sale not found' });
		}
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
