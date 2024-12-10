const menuItems = require("../Models/MenuModel")

exports.newItem = async (req, res) => {
    console.log("new item");
    const { menuName, description, heading } = req.body
    try {
        const newMenuItem = new menuItems({
            menuName, description, heading
        })
        await newMenuItem.save()
        res.status(200).json(newMenuItem)
    } catch (err) {
        res.status(401).json(err)
        console.log(err);

    }

}
exports.addListItem = async (req, res) => {
    console.log("new addlistitem");
    const { itemName, itemDescription, price} = req.body;
    console.log(itemName, itemDescription, price);
    const {menuID}=req.params;
    console.log(menuID);
    const newListItem = { itemName, itemDescription, price };
    console.log(itemName, itemDescription, price);
    
    console.log(newListItem);
    
    try {
        const updateListItem = await menuItems.findOneAndUpdate({ _id: menuID }, { $push:  {"itemList": newListItem } }, { new: true });
        res.status(200).json(updateListItem)
    } catch (err) {
        res.status(401).json(err)
        console.log(err);
    }
}


//get all food menu
exports.getAllMenu = async(req,res)=>{
    console.log("get all");
    try{
        const allMenu=await menuItems.find()
        
        console.log(allMenu);
        
        res.status(200).json(allMenu)
    }catch(err){
        res.status(401).json(err)
        console.log(err);
    }
    
}

