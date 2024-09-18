require('dotenv').config()
const express=require("express")
const app= express();
const port=process.env.PORT
const cors = require('cors')
const routes_app=require("./routes/product")
const connectdb=require("./db/connect")


app.use(express.json())
app.use(cors())
app.use("/", routes_app)
const start= async()=>{
    try{
       await connectdb(process.env.MONGODB_URL)
        app.listen(port,()=>{
            console.log("server is live")
        });
    }
    catch(error){
         console.error(error)
    }
}
start()