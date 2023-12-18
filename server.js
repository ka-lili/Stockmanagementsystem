require('dotenv').config();
const express = require('express');

const  allRoutes=require('./routes');
const {connectDb}=require('./db/databaseconnection');

const app = express();
connectDb();
app.use(express.json());

app.use('/api/',allRoutes)


app.listen(process.env.PORT,()=>{
   console.log(`listening on port ${process.env.PORT}`);
});