const express=require('express');
const body=require('body-parser'); 
const cookie=require('cookie-parser');
const session=require('express-session');
const mysql=require('mysql');
const connection=require('express-myconnection');
const app=express();
const path = require('path');
const upload =require("express-fileupload");
const uuidv4 = require('uuid');


app.use(upload());


app.use(express.static('public'));

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('upload');

});



app.post('/upload',function(req,res){
    if(req.files){
        var file = req.files.filename;
        //var filename = file.name
        if(!Array.isArray(file)){
            var filename = uuidv4.v4()+"."+file.name.split(".")[1];
        file.mv("./public/"+filename,function(err){
            if(err){console.log(err)}
        })
        
    }else{

        for(var i=0; i < file.length; i++){
        var filename = uuidv4.v4()+"."+file[i].name.split(".")[1];
        file[i].mv("./public/"+filename,function(err){
            if(err){console.log(err)}
        })
    }
}
}
    res.redirect('/');
});





app.set('view engine','ejs');
app.use(express.static('public'));
app.use(body.urlencoded({extended: true})); 
app.use(cookie());
app.use(session({
    secret:'12',
    resave:true,
    saveUninitialized: true
}));

app.use(connection(mysql,{
    host:'localhost',
    user:'chatkamon',
    password:'Dakar@05052546!',
    port:'3306',
    database:'Project'
},'single'));   



const type_loRoute = require('./routes/type_loRoute'); 
app.use('/',type_loRoute);
const location_rsRoute= require('./routes/location_rsRoute'); 
app.use('/',location_rsRoute);
const reserveRoute= require('./routes/reserveRoute'); 
app.use('/',reserveRoute);
// const okRoute= require('./routes/okRoute'); 
// app.use('/',okRoute);






app.use(express.json());

// ฐานข้อมูลที่จำลอง
const reservations = [
    { id: 1, roomName: 'Room A', approvalStatus: null },
    { id: 2, roomName: 'Room B', approvalStatus: null },
    // เพิ่มข้อมูลการจองเพิ่มเติมตามต้องการ
];

app.post('/api/approveReservation/:id', (req, res) => {
    const reserveId = parseInt(req.params.id);
    const approvalStatus = req.body.approval;

    const reservation = reservations.find((r) => r.id === reserveId);
    if (!reservation) {
        return res.status(404).json({ message: 'ไม่พบรายการการจอง' });
    }

    reservation.approvalStatus = approvalStatus;

    return res.status(200).json({ message: 'บันทึกสถานะการอนุมัติเรียบร้อย' });
});











app.listen('8040');