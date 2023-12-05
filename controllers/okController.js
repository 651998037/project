const controller = {};
const { validationResult } = require('express-validator');

controller.show37 = (req, res) => {
   
                res.render('condition')}



controller.add = (req, res) => {
    req.getConnection((err, conn) => {
        // เรียกคำสั่ง SQL เพื่อดึงข้อมูลจากตาราง 'location_rs'
        conn.query('SELECT id, name FROM location_rs', (err, location_rs) => {
            conn.query('SELECT id, roomname FROM reserve', (err, reserve) => {
                if (err) {
                    res.status(500).json(err);
                    return;
                }

                res.render('reserveadd', {
                    data: reserve,
                    data1: location_rs,
                    session: req.session
                });
            });
        });
    });
};



controller.add37 = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.session.errors = errors;
        return res.redirect('/reserve/add');
    }

    const data = req.body;
    const roomname = req.body.roomname; // ดึงค่า 'roomname' จาก req.body
    data.roomname = roomname; // เก็บค่า 'roomname' ในคอลัมน์ 'roomname' ของตาราง 'reserve'
    // ไม่ต้องลบคอลัมน์ 'roomname' ออกจากข้อมูล

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO reserve SET ?', [data], (err, reserve) => {
            if (err) {
                res.json(err);
            } else {
                return res.redirect('/reserve/list');
            }
        });
    });
};





controller.delete = (req, res) => {
    const data = req.body.data;
    res.render('confirmDel_re', {
        data: data,
        session: req.session
    });
};

controller.delete37 = (req, res) => {
    const idToDelete = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM reserve WHERE id = ?', [idToDelete], (err, reserve) => {
            return res.redirect('/reserve/list');
        });
    });
};


controller.edit37 = (req, res) => {
    const idToEdit = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM reserve WHERE id = ?', [idToEdit], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            }

            // ดึงรายชื่อห้องจาก table location_rs และใช้ในรายการ dropdown
            conn.query('SELECT id, name FROM location_rs', (err, data1) => {
                if (err) {
                    return res.status(500).json(err);
                }
                res.render('reserveEdit', { data: data[0], data1: data1, session: req.session });
            });
        });
    });
};


controller.editPost37 = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.session.errors = errors;
        return res.redirect('/editreserve/' + req.params.id);
    }

    const idToEdit = req.params.id;
    const updatedData = {
        roomname: req.body.roomname, // เก็บค่า 'roomname' ในคอลัมน์ 'roomname' ของตาราง 'reserve'
        name: req.body.name,
        phone: req.body.phone,
        usedfor: req.body.usedfor,
        startdatetime: req.body.startdatetime,
        enddatetime: req.body.enddatetime,
        created_at : req.body.created_at,
    };
    req.getConnection((err, conn) => {
        conn.query('UPDATE reserve SET ? WHERE id = ?', [updatedData, idToEdit], (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.redirect('/reserve/list');
        });
    });
};






module.exports = controller;
