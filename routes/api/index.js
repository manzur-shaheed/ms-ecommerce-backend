// imports
const router = require('express').Router();
const categoryRoute = require('./categoryRoute');
const productRoute = require('./productRoute');
const tagRoute = require('./tagRoute');

// uri to route mapping
router.use('/categories', categoryRoute);
router.use('/products', productRoute);
router.use('/tags', tagRoute);

// export
module.exports = router;