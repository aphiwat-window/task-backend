const mongoose = require('mongoose');

// 1. สร้าง Schema
const taskSchema = new mongoose.Schema({
    // บังคับว่าต้องมีข้อความ และห้ามเว้นว่าง
    title: {
        type: String,
        required: true
    },

    // ค่าเริ่มต้นเป็น false
    completed: {
        type: Boolean,
        default: false
    }
});

// 2. แปลง Schema เป็น Model
const Task = mongoose.model('Task', taskSchema);

// 3. ส่งออก Model
module.exports = Task;