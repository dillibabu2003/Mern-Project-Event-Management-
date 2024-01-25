const {Schema,model, default: mongoose}=require('mongoose');
const eventSchema=Schema({
    eventid:{type:Number},
    title:{type:String},
    date:{type:String},
    des:{type:String}
    

});
module.exports=model("events",eventSchema);