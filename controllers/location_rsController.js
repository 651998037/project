const controller = {};
const { validationResult } = require('express-validator');
const uuidv4 = require('uuid');

// controller
controller.show37 = (req, res) => {
    const keyword = req.query.search; // Get the search keyword from the query parameters

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM location_rs', (err, location_rs) => {
            if (err) {
                res.status(500).json(err);
                return;
            }

            // If a search keyword is provided, filter the data
            if (keyword) {
                location_rs = location_rs.filter(item => item.name.includes(keyword));
            }

            conn.query('SELECT * FROM type_lo', (err, type_lo) => {
                if (err) {
                    res.status(500).json(err);
                    return;
                }

                // นับจำนวนลานทำกิจกรรมตาม typename
                const typeNameCounts = {};
                location_rs.forEach(location => {
                    const typeName = location.typeid;
                    if (typeNameCounts[typeName]) {
                        typeNameCounts[typeName]++;
                    } else {
                        typeNameCounts[typeName] = 1;
                    }
                });

                res.render('location_rsView', {
                    data: location_rs,
                    roomData: location_rs,
                    data1: type_lo,
                    typeNameCounts,  // ส่งข้อมูลจำนวนลานตาม typename ไปยังหน้าแสดงผล
                    session: req.session
                });
            });
        });
    });
};







controller.add = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM type_lo', (err, type_lo) => {
            if (err) {
                res.status(500).json(err);
                return;
            }

            res.render('location_rsadd', {
               data1:type_lo, session: req.session
            });
        });
    });
};

controller.add37 = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.session.errors = errors;
        req.session.success = false;
        return res.redirect('/location_rs/add')
    } else {
        // req.session.success = true;
        // req.session.topic = "เพิ่มข้อมูลสำเร็จ!";
        const data = req.body;
        let filename = null;

        if (req.files) {
            var file = req.files.filename;

            if (!Array.isArray(file)) {
                filename = uuidv4.v4() + "." + file.name.split(".")[1];
                file.mv("./public/name/" + filename, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            } else {
                for (var i = 0; i < file.length; i++) {
                    filename = uuidv4.v4() + "." + file[i].name.split(".")[1];
                    file[i].mv("./public/name/" + filename, function (err) {
                        if (err) {
                            console.log(err);
                        }
                    });
                }
            }
        } else {
            filename = req.body.currentImage;
        }

        req.getConnection((err, conn) => {
            console.log(data, filename);
            conn.query('INSERT INTO location_rs set name = ?,typeid = ?, location = ?,img_lo = ?', [data.name, data.typeid, data.location, filename], (err, location_rs) => {
                if (err) {
                    res.json(err);
                }
                res.redirect('/location_rs/list');
            });
        });
    }
};

controller.delete = (req, res) => {
    const data = req.body.data;
    res.render('confirmDel_rs', {
        data: data, session: req.session
    });
};

controller.delete37 = (req, res) => {
    // req.session.success = true;
    // req.session.topic = "ลบข้อมูลสำเร็จ!";
    const idToDelete = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM location_rs WHERE id = ?', [idToDelete], (err, location_rs) => {
            res.redirect('/location_rs/list');
        });
    });
};

controller.edit37 = (req, res) => {
    const idToEdit = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM location_rs WHERE id = ?', [idToEdit], (err, data) => {
            conn.query('SELECT * FROM type_lo', (err, type_lo) => {
                if (err) {
                    res.status(500).json(err);
                    return;
                }

                res.render('location_rsEdit', {
                    data: data[0],
                    data1: type_lo, // เปลี่ยน data1 เป็น type_lo
                    session: req.session
                });
            });
        });
    });
};



controller.editPost37 = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.session.errors = errors;
        req.session.success = false;
        return res.redirect('/editlocation_rs/' + req.params.id);
    } else {
        const idToEdit = req.params.id;
        const data = req.body;
        let filename = null;

        if (req.body.imageOption === 'new') {
            if (req.files) {
                var file = req.files.filename;
                if (!Array.isArray(file)) {
                    filename = uuidv4.v4() + "." + file.name.split(".")[1];
                    file.mv("./public/name/" + filename, function (err) {
                        if (err) {
                            console.log(err);
                        }
                    });
                } else {
                    for (var i = 0; i < file.length; i++) {
                        filename = uuidv4.v4() + "." + file[i].name.split(".")[1];
                        file[i].mv("./public/name/" + filename, function (err) {
                            if (err) {
                                console.log(err);
                            }
                        });
                    }
                }
            }
        } else if (req.body.imageOption === 'current') { // ผู้ใช้เลือก "ใช้รูปภาพในระบบ"
            
            // ให้ filename เก็บชื่อรูปภาพปัจจุบัน
            filename = req.body.currentImage;
        }

        req.getConnection((err, conn) => {
            conn.query('UPDATE location_rs SET name = ?, typeid = ?, location = ?, img_lo = ? WHERE id = ?', [data.name, data.typeid, data.location, filename, idToEdit], (err, result) => {
                if (err) {
                    return res.status(500).json(err);
                }
                res.redirect('/location_rs/list');
            });
        });
    }
};

controller.show00 = (req, res) => {
    const data = req.body.data;
    res.render('condition', {
        data: data,
        session: req.session
    });
};



controller.show01 = (req, res) => {
    const { startDate, endDate, startTime, endTime, roomname } = req.query;
    const pageSize = req.query.pageSize || 10;
    const selectedRoomname = req.query.selectedRoomname;

    let query = 'SELECT reserve.id, location_rs.name as roomname, reserve.name, reserve.phone, reserve.usedfor,reserve.startdatetime, reserve.enddatetime, reserve.equipment,reserve.approve,reserve.affiliation,reserve.group_name, reserve.position ,reserve.created_at,reserve.to_name FROM project.reserve JOIN project.location_rs ON reserve.roomname = location_rs.id';
    ;
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
                if (err) {
                    res.status(500).json(err);
                    return;
                }

                res.render('calendar', {
                    data: data,
                    pageSize: pageSize,
                    session: req.session,
                    data1: location_rs
                });
            });
        });
    });
};





module.exports = controller;