
const  ItemModel= require('../models/stock.model');

var createdItem = async (req, res, next) => {
try {
    const newItem =new ItemModel(req.body);
    const savedItem =await newItem.save();

    console.log(savedItem);
    res.status(201).json({
        message:'Item saved successfully',
        item: savedItem
    })
} catch (error) {
    res.status(500).send('Failed to save item');
}

};

const listStock = async (req, res, next) => {
    try {
        var stock=await ItemModel.find({});
        res.status(200).json(stock);

        
    } catch (error) {
        res.status(500).send('Failed to find stock items')
    }
}


module.exports ={
    createdItem,
    listStock
}