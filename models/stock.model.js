const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: { required: true, type: String },
    itemPrice: { required: true, type: String },
    manufacturedDate: { required: true, type: String },
    measurementUnit: { required: true, type: String },
    id: { required: true, type: String},
    item: {
        type: String,
        required: true,
        enum: {
            values: ["milk", "biscuit","chocolates","sodas"],
            message: "{value} is not a valid item",
        }
    },
    createDate: { 
        required: true, 
        type: Date,
        default: new Date(), 
    },
    updateTime: { required: false, type: Date },
});

module.exports = mongoose.model('item', itemSchema);