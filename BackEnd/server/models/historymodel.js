const {Schema,model, default: mongoose}=require('mongoose');
const historySchema=Schema({
    username:{type:String},
    eventid:{type:Number},
    title:{type:String},
    date:{type:String},
    des:{type:String}
    

});
module.exports=model("history",historySchema);