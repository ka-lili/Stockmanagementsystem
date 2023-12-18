const StockModel = require('../models/stock.model');
 

const createItem = async (req, res, next) => { 
    try {
        const newItem = new StockModel(req.body);
        const savedItem = await newItem.save();
        
        console.log(savedItem);

        res.status(201).json({
            message: 'item added successfully',
            employee: savedItem
        })
    } catch (error) {
        res.status(500).send("Failed to save!!");
    }
}

const listItems = async (req, res, next) => { 
    try {
        var items = await StockModel.find({});
        res.status(200).json({ items });
    } catch (error) {
        res.status(500).send("Error fetching items!!");
    }
}


const findById = async (req, res, next) => { 
    
}

// const findByEmail = async (req, res, next) => { 
    
// }

module.exports = {
    createItem,  listItems
}