const express = require('express');
const router = express.Router();
const type_loController = require('../controllers/type_loController');
const validator = require('../controllers/validator');

router.get('/type_lo/list', type_loController.show37);

router.get('/type_lo/add', type_loController.add)
router.post('/type_lo/add',validator.checklo,type_loController.add37);

router.get('/edittype_lo/:id',type_loController.edit37);
router.post('/edittype_lo/:id',validator.type_lo,type_loController.editPost37);

router.get('/deletetype_lo/:id',type_loController.delete);
router.post('/deletetype_lo/:id',type_loController.delete37);

module.exports = router;