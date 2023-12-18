const express = require('express');
const stockRoutes = express.Router();
const { create, findByEmail, findById, list, remove, update  } = require('../controller/stockcontroller');
stockRoutes.get('/list', list);
stockRoutes.post('/add', create);
stockRoutes.get('/findById/:id', findById);
stockRoutes.get('/findByEmail/:email', findByEmail);
stockRoutes.put('/update', update);
stockRoutes.delete('/delete', remove);

module.exports = stockRoutes;