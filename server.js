require('dotenv').config();
var express = require('express');

var  allRoutes=require('./routes');
var {connectDb}=require('./db/databaseconnection');

var app = express();
connectDb();
app.use(express.json());

app.use('/api/',allRoutes)


app.listen(process.env.PORT,()=>{
   console.log(`listening on port ${process.env.PORT}`);
});