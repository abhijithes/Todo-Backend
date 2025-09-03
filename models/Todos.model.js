const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    item:{
        type: String,
        required: true,
    },
    completed:{
        type: Boolean,
        default: false,
    }

}, {timestamps: true});

const Todo = mongoose.model('todo',TodoSchema)
module.exports = Todo;