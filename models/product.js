const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const userschema=new mongoose.Schema({
    name:{type:String,required:[true,"name lagbo"]},
    email:{type:String,require:[true,"mobile lagbo"],unique:true},
    password:{type:String,required:[true,"password lagbo"]},
    isadmin:{type:String,require:true,default:false},
    mobile:{type:Number,require:[true,"mobile labe"]},
    createdAT:{type:Date,default:Date.now()}

})
userschema.pre('save',async function (next){
    if(!this.isModified('password')){
        next()
    }
    const salt=await bcrypt.genSalt(12)
    const temp=await bcrypt.hash(this.password,salt);
    this.password=temp
    
})
userschema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
module.exports=mongoose.model('userDeatails',userschema)

