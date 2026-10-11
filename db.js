const mongoose = require('mongoose');

// นำ Connection String จาก MongoDB Atlas มาใส่
const dbURI = process.env.MONGO_URI;

// เชื่อมต่อ MongoDB Atlas
mongoose.connect(dbURI)
    .then(() => {
        console.log('สำเร็จ! Node.js เชื่อมต่อกับ MongoDB Atlas แล้ว');
    })
    .catch((err) => {
        console.error('พัง! เชื่อมต่อ Database ไม่สำเร็จ:', err.message);
    });