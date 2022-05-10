const router = require('express').Router();
const note = require('./noteRoutes');

router.use(note);

module.exports = router;