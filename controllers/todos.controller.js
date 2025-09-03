const { ObjectId, ReturnDocument } = require("mongodb");
const Todo = require("../models/Todos.model");

const read = async (req,res)=>{
    const todos = await Todo.find();
    res.status(200).json(todos)
}

const create = async (req,res)=>{
    const todos = await Todo.create(req.body)
    return  res.status(201).json(todos);
}

const update = async (req,res)=>{
    const { id } = req.params;
    const todo = await Todo.updateOne({ _id: id}, req.body)
    return res.status(200).json(todo)
}
const Delete = async (req,res)=>{
    const { id } = req.params;
    const todo = await Todo.deleteOne({_id: id})
    res.status(204).json(todo);
}

module.exports = {Delete, update, create, read}