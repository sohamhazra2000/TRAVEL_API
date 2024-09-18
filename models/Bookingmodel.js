const mongoose=require('mongoose')
const bookingschema=new mongoose.Schema({
    name:{type:String,required:[true,"name lagbo"]},
    email:{type:String,require:[true,"email required"],unique:true},
    dest:{type:String,require:[true,"destination required"]},
    s_date:{type:String,require:[true,"start date required"]},
    e_date:{type:String,require:[true,"start date required"]},
    num_person:{type:Number,require:[true,"number of people required"]},
    price:{type:Number,require:[true,"price is required"]},
    createdAT:{type:Date,default:Date.now()}

})
module.exports=mongoose.model('bookingDeatails',bookingschema)