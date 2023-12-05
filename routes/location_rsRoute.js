const express = require('express');
const router = express.Router();
const location_rsController = require('../controllers/location_rsController');
const validator = require('../controllers/validator');

router.get('/location_rs/list', location_rsController.show37);

router.get('/location_rs/add', location_rsController.add);
router.post('/location_rs/add', validator.checkad, location_rsController.add37);

router.get('/editlocation_rs/:id', location_rsController.edit37);
router.post('/editlocation_rs/:id', validator.location_rs, location_rsController.editPost37);

router.get('/deletelocation_rs/:id', location_rsController.delete);
router.post('/deletelocation_rs/:id', location_rsController.delete37);

router.get('/condition', location_rsController.show00);

router.get('/calendar', location_rsController.show01);



module.exports = router;

