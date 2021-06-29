// imports
const router = require('express').Router();
const categoryRoutes = require('./categoryRoute');
const productRoutes = require('./productRoute');
const tagRoutes = require('./tagRoute');

// uri to route mapping
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
// router.use('/tags', tagRoutes);

// export
module.exports = router;