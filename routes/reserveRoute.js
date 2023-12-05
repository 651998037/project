const express = require('express');
const router = express.Router();
const reserveController = require('../controllers/reserveController');
const validator = require('../controllers/validator');

router.get('/reserve/list', reserveController.show37);

router.get('/reserve/add', reserveController.add)
router.post('/reserve/add',validator.checkre,reserveController.add37);

router.get('/editreserve/:id',reserveController.edit37);
router.post('/editreserve/:id',reserveController.editPost37);

router.get('/deletereserve/:id',reserveController.delete);
router.post('/deletereserve/:id',reserveController.delete37);

router.post('/reserve/E',reserveController.update); //แก้ไขรายชื่อ ADMIN
// router.get('/reserve/A', reserveController.updateApproval1)
router.post('/reserve/A', reserveController.updateApproval);

router.get('/room/:id', reserveController.room);








// router.get('/ok/:id',reserveController.approve);
// router.post('/ok/:id',reserveController.approveok);




module.exports = router;