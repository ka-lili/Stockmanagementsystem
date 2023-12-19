// const { createItem,listStock }=require('../controller/stockcontroller');
// const express = require('express');
// const stockRoute = express.Router();
  
// stockRoute.post('/add',createItem);
// stockRoute.get('/list',listStock);
//  module.exports = stockRoute;

// stock.routes.js
const express = require('express');
const router = express.Router();
// Make sure the callback function is defined
router.post('/add', (req, res) => {
    // Your route handling logic here
});
module.exports = router;