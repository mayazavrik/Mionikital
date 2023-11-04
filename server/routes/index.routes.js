const router = require("express").Router();
const getUserRouter = require("./api/getUser");
const authApiRouter = require("./api/auth.api");
const getNewsRouter = require("./api/posts.api");

router.use("/api/getUser", getUserRouter);
router.use("/api/sign-up", authApiRouter);
router.use("/api/news", getNewsRouter);
module.exports = router;
