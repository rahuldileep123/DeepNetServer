const mongoose = require("mongoose")
const itemListSchema = mongoose.Schema({
    itemName: {
        type: String
    },
    itemDescription: {
        type: String
    },
    price: {
        type: String
    }
})
const menuSchema =new mongoose.Schema({
    menuName: {
        type: String
    },
    description: {
        type: String
    },
    heading: {
        type: String
    },
    itemList: [itemListSchema]
})
const menuItems= mongoose.model("menuItems",menuSchema)
module.exports=menuItems