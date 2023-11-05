const router = require("express").Router();
const { Service } = require("../../db/models");


router.put("/person/:serviceId", async (req, res) => {
  console.log(req.body);
  try {
    const { serviceId } = req.params;
    const { img } = req.body;
    const service = await Service.update(
      {
        img,
      },
      { where: { id: serviceId } }
    );
    res.json(service);
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
