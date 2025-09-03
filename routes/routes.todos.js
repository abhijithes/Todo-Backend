const express = require('express')
const routes = express.Router();
const {Delete, update, create, read} = require("../controllers/todos.controller");

routes.get('/',read)

routes.post('/',create)

routes.patch('/:id',update)

routes.delete('/:id',Delete)


module.exports = routes;