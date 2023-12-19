const mongoose = require('mongoose');

const ItemModel= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        measurements:{
            required:true,
            type:String,
            enum:{
                values:['LITERS','PCS','KILOS','GRAMS'],
                message:"{value} is not valid",
            }
        },
        quantity:{
            type:Number,
            required:true,

        },
        price:{
            type:Number,
            required:true,

        }
    }
);
 
module.exports=mongoose.model('stockItem', ItemModel);