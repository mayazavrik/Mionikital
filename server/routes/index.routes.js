const router = require('express').Router();
const getUserRouter = require('./api/getUser');
const authApiRouter = require('./api/auth.api');

router.use('/api/getUser', getUserRouter);
router.use('/api/sign-up', authApiRouter);
module.exports = router;
