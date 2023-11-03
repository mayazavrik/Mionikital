const router = require('express').Router();
const getUserRouter = require('./api/getUser');
const authApiRouter = require('./api/auth.api');
const servicesApiRouter = require('./api/services.api.routes');
const salesApiRouter = require('./api/sales.api.routes');

router.use('/api/getUser', getUserRouter);
router.use('/api/sign-up', authApiRouter);
router.use('/api/services', servicesApiRouter);
router.use('/api/sales', salesApiRouter);
module.exports = router;
