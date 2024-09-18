const jwt =require('jsonwebtoken')

const generatetoken=(id)=>{
    return jwt.sign({id},process.env.JWTSECRET,{expiresIn:"60d",})
}
module.exports=generatetoken