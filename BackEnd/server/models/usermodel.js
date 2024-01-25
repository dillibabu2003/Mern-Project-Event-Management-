const {Schema,model, default: mongoose}=require('mongoose');
const userSchema=Schema({
    name:{type:String},
    email:{type:String},
    userpass:{type:String},
    contact:{type:String}

});
module.exports=model("user",userSchema);