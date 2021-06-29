// router module from express
const router = require('express').Router();
const apiRoutes = require('./api');

// api routes
router.use('/api', apiRoutes);

// export
module.exports = router;