require("dotenv").config()
const express = require("express");
const cors= require("cors")
const router =require("./Routes/route")
require("./DB/connection")

const DeepServer=express()

DeepServer.use(cors())
DeepServer.use(express.json())
DeepServer.use(router)

const PORT = 3000 || process.env.PORT

DeepServer.listen(PORT,()=>{
    console.log("sample server started");
    
})

DeepServer.get("/",(req,res)=>{
    res.status(200).send( `<h1 style="color:red"}}>sample server started</h1>`
        )
})