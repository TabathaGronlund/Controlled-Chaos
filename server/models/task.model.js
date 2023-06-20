
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        min: [0, "Description must be longer than 3 characters"],
    }
}, {timestamps:true});

// const Task = mongoose.model('Task', TaskSchema);

// module.exports = TaskSchema;

module.exports = mongoose.model('Task', TaskSchema);
