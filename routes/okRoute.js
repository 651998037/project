const express = require('express');
const router = express.Router();
const okController = require('../controllers/okController');
const validator = require('../controllers/validator');

router.get('/condition/', okController.show37);



// router.get('/location_rs/add', okController.add)
// router.post('/location_rs/add',validator.checkad,okController.add37);

// router.get('/editlocation_rs/:id',okController.edit37);
// router.post('/editlocation_rs/:id',validator.location_rs,okController.editPost37);

// router.get('/deletelocation_rs/:id',okController.delete);
// router.post('/deletelocation_rs/:id',okController.delete37);

module.exports = router;