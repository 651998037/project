const controller = {};
const { validationResult } = require('express-validator');
function startdate_time() {
    // const currentTimestamp = getCurrentTimestamp();
    const currentDate = new Date();
    console.log(currentDate);
}

controller.show37 = (req, res) => {
    const { startDate, endDate, startTime, endTime, roomname } = req.query;
    const pageSize = req.query.pageSize || 10;
    const selectedRoomname = req.query.selectedRoomname;

    let query = 'SELECT reserve.id, location_rs.name as roomname, reserve.name, reserve.phone, reserve.usedfor,reserve.startdatetime, reserve.enddatetime, reserve.equipment,reserve.approve,reserve.affiliation,reserve.group_name, reserve.position ,reserve.created_at,reserve.to_name FROM reserve JOIN location_rs ON reserve.roomname = location_rs.id';
    const queryParams = [];

    if (startDate && endDate) {
        query += ` WHERE DATE(startdatetime) BETWEEN ? AND ?`;
        queryParams.push(startDate, endDate);

        if (startTime && endTime) {
            query += ` AND TIME(startdatetime) BETWEEN ? AND ?`;
            queryParams.push(startTime, endTime);
        }
    }

    if (roomname) {
        query += query.includes('WHERE') ? ' AND' : ' WHERE';
        query += ` (reserve.roomname LIKE ? OR location_rs.id LIKE ?)`;
        queryParams.push(`%${roomname}%`, `%${roomname}%`);
    }

    // ตรวจสอบการเลือกห้องและกรองตามห้อง
    if (selectedRoomname) {
        query += ` AND location_rs.name = ?`;
        queryParams.push(selectedRoomname);
    }

    req.getConnection((err, conn) => {
        conn.query(query, queryParams, (err, data) => {
            if (err) {
                res.status(500).json(err);
                return;
            }

            conn.query('SELECT id, name FROM location_rs', (err, location_rs) => {
                console.log("location check",location_rs);
                if (err) {
                    res.status(500).json(err);
                    return;
                }

                res.render('reserveView', {
                    data: data,
                    pageSize: pageSize,
                    session: req.session,
                    data1: location_rs
                });
            });
        });
    });
};


// เพิ่มฟังก์ชัน getCurrentTimestamp สำหรับรับ timestamp ปัจจุบัน
function getCurrentTimestamp() {
    return Date.now();
}



controller.add = (req, res) => {
    const errors = req.session.errors;
    req.session.errors = null; // เคลียร์ข้อความแจ้งเตือนหลังจากนำไปแสดงแล้ว
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
        req.session.errors = errors.array();
        return res.redirect('/reserve/add');
    }

    const data = req.body;
    console.log(data);
    const startdatetime = new Date(data.startdatetime);
    const enddatetime = new Date(data.enddatetime);

    req.getConnection((err, conn) => {
        conn.query(
            'SELECT id FROM reserve WHERE (startdatetime <= ? AND enddatetime >= ?) OR (startdatetime <= ? AND enddatetime >= ?)',
            [startdatetime, startdatetime, enddatetime, enddatetime],
            (err, conflictingReservations) => {
                if (err) {
                    return res.status(500).json(err);
                }



                data.created_at = new Date(); // เก็บเวลาปัจจุบัน
                conn.query('INSERT INTO reserve SET ?', [data], (err, reserve) => {
                    if (err) {
                        return res.status(500).json(err);
                    } else {
                        return res.redirect('/reserve/list');
                    }
                });
            }
        );
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
        conn.query('SELECT reserve.id, location_rs.name as roomname, reserve.name, reserve.phone, reserve.usedfor, DATE_FORMAT(reserve.startdatetime, "%Y-%m-%dT%H:%i") as startdatetime, DATE_FORMAT(reserve.enddatetime, "%Y-%m-%dT%H:%i") as enddatetime, reserve.equipment,reserve.approve,reserve.affiliation,reserve.group_name, reserve.position ,reserve.created_at,reserve.to_name FROM project.reserve JOIN project.location_rs ON reserve.roomname = location_rs.id WHERE reserve.id = ?', [idToEdit], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            }
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
    const idToEdit = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE reserve SET roomname = ?, name = ?, phone = ?, usedfor = ?, startdatetime = ?, enddatetime = ?, equipment = ?, approve = ?, affiliation = ?, group_name = ?, position = ?, to_name = ? WHERE id = ?',
            [data.roomname, data.name, data.phone, data.usedfor, data.startdatetime, data.enddatetime, data.equipment, data.approve, data.affiliation, data.group_name, data.position, data.to_name, idToEdit], (err, result) => {
                if (err) {
                    return res.status(500).json(err);
                }
                res.redirect('/reserve/list');
            });

    });
}





controller.update = (req, res) => {
    const startdatetime = new Date(req.body.hamham1);
    const enddatetime = new Date(req.body.hamham2);

    req.getConnection((err, conn) => {
        conn.query(
            'SELECT id FROM reserve WHERE ((startdatetime <= ? AND enddatetime >= ?) OR (startdatetime <= ? AND enddatetime >= ?)) AND roomname <> ?',
            [startdatetime, startdatetime, enddatetime, enddatetime, req.body.id],
            (err, conflictingReservations) => {
                if (err) {
                    console.error("Error executing SQL query:", err);
                    return res.status(500).json(err);
                }

                console.log("Conflicting Reservations:", conflictingReservations);

                if (conflictingReservations.length > 0) {
                    res.json({
                        hamham: "1", // แจ้งเตือนเมื่อห้องไม่ว่าง
                    });
                } else {
                    res.json({
                        hamham: "5", // ห้องว่าง
                    });
                }
            }
        );
    });
};






controller.updateApproval = (req, res) => {
    const itemId = req.body.Id;
    const approvalStatus = req.body.approve;

    console.log(itemId)

    req.getConnection((err, conn) => {
        if (err) {
            return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการเชื่อมต่อกับฐานข้อมูล' });
        }
        const updateQuery = 'UPDATE reserve SET approve = ? WHERE id = ?';
        conn.query(updateQuery, [approvalStatus, itemId], (err, result) => {
            if (err) {
                console.error("เกิดข้อผิดพลาดในการอัปเดตข้อมูล:", err);
                return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการอัปเดตข้อมูล' });
            }

            if (approvalStatus === '1') {
                // กรณีอนุมัติ
                // ทำสิ่งที่คุณต้องการ เช่น บันทึกในฐานข้อมูล
                console.log('อนุมัติ');


                // อย่าลืมเพิ่มโค้ดเพื่อบันทึกข้อมูลลงในตาราง "reserve" ที่นี่
                // ตัวอย่าง:
                // const insertQuery = 'INSERT INTO reserve (approve) VALUES (?)';
                // conn.query(insertQuery, [approvalStatus], (err, result) => {
                //     if (err) {
                //         console.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล:", err);
                //         return res.status(500).json({ message: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล' });
                //     }
                // });
            } else if (approvalStatus === '0') {
                // กรณีไม่อนุมัติ
                // ทำสิ่งที่คุณต้องการ เช่น บันทึกในฐานข้อมูล
                console.log('ไม่อนุมัติ');
                // เพิ่มโค้ดเพื่อบันทึกข้อมูลลงในตาราง "reserve" หากจำเป็น
            }

            // หลังจากอัปเดตสำเร็จ ส่งผู้ใช้กลับไปยังหน้าที่คุณต้องการ
            return res.redirect('/reserve/list');
        });
    });
};

// const jsreport = require('jsreport')();


controller.room = (req, res) => {
    const idToEdit = req.params.id;

    req.getConnection((err, conn) => {
        // conn.query('SELECT reserve.id, location_rs.name as roomname, reserve.name, reserve.phone, reserve.usedfor,reserve.startdatetime, reserve.enddatetime, reserve.equipment,reserve.approve,reserve.affiliation,reserve.group_name, reserve.position ,reserve.created_at,reserve.to_name FROM project.reserve JOIN project.location_rs ON reserve.roomname = location_rs.id', [idToEdit], (err, data) => {
        conn.query('SELECT reserve.id, location_rs.name as roomname, reserve.name, reserve.phone, reserve.usedfor,reserve.startdatetime,reserve.enddatetime, reserve.equipment,reserve.approve,reserve.affiliation,reserve.group_name, reserve.position ,reserve.created_at,reserve.to_name FROM reserve JOIN location_rs ON reserve.roomname = location_rs.id where reserve.id = ?  ', [idToEdit], (err, data) => {
            console.log(idToEdit);
            if (err) {
                return res.status(500).json(err);
            }

            conn.query('SELECT id, name FROM location_rs', (err, data1) => {
                if (err) {
                    return res.status(500).json(err);
                }
                res.render('report', { data: data[0], data1: data1, session: req.session });
               
            });
            
        });
    });
}
module.exports = controller;

