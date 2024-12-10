const  mongoose  = require("mongoose");

mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log("mongodb connceted with server");
        
    }
).catch(err=>{
    console.log(err);
    console.log("failed");
    
})