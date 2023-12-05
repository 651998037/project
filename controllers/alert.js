function showAlert(message) {
    // สร้าง HTML element สำหรับแสดงข้อความแจ้งเตือน
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert'); // ปรับแต่ง CSS class ตามที่คุณต้องการ
    alertDiv.innerHTML = `
        <h2>${message.title}</h2>
        <p>${message.Text}</p>
        <button>${message.button}</button>
    `;

    // เพิ่ม alertDiv ไปยัง DOM ในหน้าเว็บของคุณ
    const body = document.querySelector('body'); // แก้ตามโครงสร้าง HTML ของคุณ
    body.appendChild(alertDiv);
}


showAlert({
    title: "ห้องนี้มีการจองแล้ว",
    Text: "กรุณาจองใหม่อีกครั้ง" ,
    icon: "success",
    button: "ตกลง",

})



module.exports = { showAlert };