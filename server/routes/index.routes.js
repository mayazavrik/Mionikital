const router = require('express').Router();
const getUserRouter = require('./api/getUser');
const authApiRouter = require('./api/auth.api');
const getNewsRouter = require('./api/posts.api');
const servicesApiRouter = require('./api/services.api.routes');
const salesApiRouter = require('./api/sales.api.routes');
const uslugasApiRouter = require('./api/uslugas.api.routes');
const markApiRouter = require('./api/marks.api.routes');
const uslugasPricesApiRouter = require('./api/uslugasPrices.api.routes');

router.use('/api/getUser', getUserRouter);
router.use('/api/news', getNewsRouter);
router.use('/api/services', servicesApiRouter);
router.use('/api/sales', salesApiRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/uslugas', uslugasApiRouter);
router.use('/api/marks', markApiRouter);
router.use('/api/uslugasPrice', uslugasPricesApiRouter);
module.exports = router;
