const router = require('express').Router();
const getUserRouter = require('./api/getUser');
const authApiRouter = require('./api/auth.api');

router.use('/api/auth', authApiRouter);
module.exports = router;
