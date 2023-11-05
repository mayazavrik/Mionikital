const router = require("express").Router();
const getUserRouter = require("./api/getUser");
const getServiceRouter = require("./api/getService");
const authApiRouter = require("./api/auth.api");
const getNewsRouter = require("./api/posts.api");
const servicesApiRouter = require("./api/services.api.routes");
const salesApiRouter = require("./api/sales.api.routes");

router.use("/api/getUser", getUserRouter);
router.use("/api/getService", getServiceRouter);
router.use("/api/news", getNewsRouter);
router.use("/api/services", servicesApiRouter);
router.use("/api/sales", salesApiRouter);
router.use("/api/auth", authApiRouter);
module.exports = router;
