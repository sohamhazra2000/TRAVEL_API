const AsyncHandler = require('express-async-handler')
const product=require('../models/product')
const user=require("../models/product")
const book=require('../models/Bookingmodel')
const generatetoken=require("../utility/jasonwebt")
const expressAsyncHandler = require('express-async-handler')

const Reg=AsyncHandler(async(req,res)=>{
    const{name,email,password,mobile}=req.body;
    const existinguser=await user.findOne({email})
    if(existinguser){
        res.status(400).json({msg:"user exist"})
    }
    const a= await user.create({name,email,password,mobile})
    
    if(a){
        res.status(200).json({msg :"register sucess",name:a.name,email:a.email,id:a._id})
    }
    else{
        res.status(400).json({msg:"eror has occured"})
    }

})


const Log=AsyncHandler(async(req,res)=>{
    const{email,password}=req.body;
    const ay= await user.findOne({email});
    if(ay &&(await ay.matchPassword(password))){
        res.status(200).json({msg:"sucess",name:ay.name,email:ay.email,id:ay._id,token:generatetoken(ay._id)})
    }
    else{
        res.status(400).json({message:"account do not match"})
    }
    
})
const Bookings=AsyncHandler(async(req,res)=>{
    const{name,email,dest,s_date,e_date,num_person,price}=req.body;
    const ao=await book.create({name,email,dest,s_date,e_date,num_person,price})
    if(ao){
        res.status(200).json({msg:'booking confirmed',booking_id:ao._id,})
    }
    else{
        res.status(400).json({msg:"failed to book"})
    }

})
const Check_booking=AsyncHandler(async(req,res)=>{
    const{email}=req.body;
    const at=await book.findOne({email})
    if(at){
        res.status(200).json({msg:'sucess',name:at.name,destination:at.dest,start_date:at.s_date,price:at.price})
    }
    else{
        res.status(400).json({msg:"failed"})
    }

})
module.exports={Reg,Log,Bookings,Check_booking}