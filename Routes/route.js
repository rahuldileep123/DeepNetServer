const express =require("express")
const router= new express.Router()
const menuController=require("../controllers/menuController")

router.post("/addNewMenu",menuController.newItem)
router.put("/addListItem/:menuID",menuController.addListItem)
router.get("/getAllMenu/",menuController.getAllMenu)
module.exports =router