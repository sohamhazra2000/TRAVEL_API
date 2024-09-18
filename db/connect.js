const mongoose=require("mongoose")
const connectdb=(uri)=>{
    console.log("connected to db");
    return mongoose.connect(uri)
}
module.exports=connectdb