const controller ={};
const { validationResult } = require('express-validator');

controller.show37=(req,res) => {
    req.getConnection((err,conn) =>{
        conn.query('SELECT * FROM type_lo',(err,type_lo)=>{
            if(err){
                res.status(500).json(err);
                return;
            }
            res.render('type_loView',{
                data:type_lo,session:req.session
            });
        });
    });
};


controller.add = (req, res) => {
    res.render('type_loadd',{
        session:req.session
    });
};

controller.add37=(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        req.session.errors=errors;
        req.session.success =false;
        return  res.redirect('/type_lo/add')
    }else{
        req.session.success=true;
        req.session.topic="เพิ่มข้อมูลสำเร็จ!";
        const data=req.body;
        req.getConnection((err,conn) =>{
        conn.query('INSERT INTO type_lo set ?',[data],(err,type_lo)=>{
            if(err){
                res.json(err);
            }
            res.redirect('/type_lo/list');
        })
    })
}};

controller.delete=(req, res) => {
    const data = req.body.data;
    res.render('confirmDel_lo',{
        data:data,session:req.session
    });
};

controller.delete37=(req,res) => {
    req.session.success=true;
    req.session.topic="ลบข้อมูลสำเร็จ!";
    const idToDelete = req.params.id;
    req.getConnection((err,conn) =>{
        conn.query('DELETE FROM type_lo WHERE id = ?', [idToDelete], (err,type_lo) => {
            res.redirect('/type_lo/list');
            });
        });
    };

controller.edit37 = (req, res) => {
    const idToEdit = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM type_lo WHERE id = ?', [idToEdit], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.render('type_loEdit', { data: data[0],session:req.session });
        });
    });
};

controller.editPost37 = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        req.session.errors=errors;
        req.session.success =false;
        return  res.redirect('/edittype_lo/'+ req.params.id)
    }else{
        req.session.success=true;
        req.session.topic="แก้ไขข้อมูลสำเร็จ!";
        const idToEdit = req.params.id;
        const updatedData = {
        
        typename: req.body.typename,
    };
    req.getConnection((err, conn) => {
        conn.query('UPDATE type_lo SET ? WHERE id = ?', [updatedData, idToEdit], (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.redirect('/type_lo/list'); 
        });
    });
}};




module.exports=controller;