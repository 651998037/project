const { check } = require('express-validator');

//exports.addValidator = [check('Name',"ชื่อผู้ใช้งานไม่ถูกต้อง!").not().isEmpty(),check('email',"อีเมล์ไม่ถูกต้อง!").isEmail()];

exports.checklo = [
    check('typename', "ชื่อห้องประชุมไม่ถูกต้อง!").not().isEmpty(),
    
];

exports.type_lo = [
    check('typename', "ชื่อห้องประชุมไม่ถูกต้อง!").not().isEmpty(),
   
];

exports.checkad = [
    check('typeid', "กรุณาเลือกประเภทพื้นที่!").not().isEmpty(),
    check('name', "ชื่อพื้นที่กิจกรรมไม่ถูกต้อง!").not().isEmpty(),
    check('location', "ชื่อพื้นที่กิจกรรมไม่ถูกต้อง!").not().isEmpty(),
];

exports.location_rs = [
    check('typeid', "กรุณาเลือกประเภทพื้นที่!").not().isEmpty(),
    check('name', "ชื่อพื้นที่กิจกรรมไม่ถูกต้อง!").not().isEmpty(),
    check('location', "ชื่อพื้นที่กิจกรรมไม่ถูกต้อง!").not().isEmpty(),
];
exports.checkre = [
    check('name', "ชื่อผู้จองไม่ถูกต้อง!").not().isEmpty(),
    check('phone', "เบอร์โทรไม่ถูกต้อง!").not().isEmpty(),
    check('usedfor', "ชื่อพื้นที่กิจกรรมไม่ถูกต้อง!").not().isEmpty(),
    check('startdatetime', "วัน-เวลาเริ่มต้นไม่ถูกต้อง!").not().isEmpty(),
    check('enddatetime', "วัน-เวลาสิ้นสุดต้นไม่ถูกต้อง!").not().isEmpty(),
   
];

exports.reserve = [
    check('name', "ชื่อผู้จองไม่ถูกต้อง!").not().isEmpty(),
    check('phone', "เบอร์โทรไม่ถูกต้อง!").not().isEmpty(),
    check('usedfor', "ชื่อพื้นที่กิจกรรมไม่ถูกต้อง!").not().isEmpty(),
    check('startdatetime', "วัน-เวลาเริ่มต้นไม่ถูกต้อง!").not().isEmpty(),
    check('enddatetime', "วัน-เวลาสิ้นสุดต้นไม่ถูกต้อง!").not().isEmpty(),
    check('affiliation',"affiliation ไม่ถูกต้อง'").not().isEmpty(),
    check('group_name',"group_name ไม่ถูกต้อง").not().isEmpty(),
    check('position',"position ไม่ถูกต้อง").not().isEmpty(),
    check('to_name',"to_name ไม่ถูกต้อง").not().isEmpty(),
]
