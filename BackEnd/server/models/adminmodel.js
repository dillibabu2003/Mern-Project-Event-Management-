const {Schema,model, default: mongoose}=require('mongoose');
const adminSchema=Schema({
    adminid:{type:Number},
    adminname:{type:String},
    email:{type:String},
    adminpass:{type:String},
    contact:{type:String}

});
module.exports=model("admin",adminSchema);