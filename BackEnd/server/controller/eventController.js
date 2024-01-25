let Event=require('../models/eventmodel');
let  eventid=1;
exports.register=async(req,res)=>{
    try{
      const {title,date,des}=req.body;
      console.log("Entered event register",title,date,des);
      if(!title||!date||!des) return res.send('some feilds are missing');
      const check =await Event.exists({title,date});
      if(check){
        return res.send("Already the data exists");
      }
      
      else{
      const user=await Event.create({eventid:eventid+1,title,date,des});
    
      res.send('Eevnt is registered successfully');
      }
    }catch(error){
        res.status(500).send('Error in registering User');
    }
}
exports.viewall=async(req,res)=>{
    try{
        
        console.log("Entered event viewing");
      
        const view =await Event.find({});
       
       
      
        res.send(view);
        }
        catch(error){
            res.send("Error in viewing eventrs")
        }
    }
    
exports.delete=async(req,res)=>{
    try{

        let eventid=req.params.id;
        console.log("entered deleting sepecific event",eventid);

        if(!eventid){
            return res.send("eventid missing");
        }
         await  Event.deleteOne({eventid});
        res.send("the event deleted");
        
    }catch(error){
        res.send("Error in deleting eventrs")
    }
}
exports.edit=async(req,res)=>{
    try{
         let eventid=req.params.id;
         let updateData=req.body;
         console.log("enterred edit ");
         if(!eventid)return res.send("fields missing");
         await Event.updateOne({eventid},updateData);
        // res.send
    }catch(error){
        res.send("Error in editing");
    }
}
// exports.viewSpecified=async(req,res)=>{
//     try{
//         console.log("Entered specified event function");
//         let title=req.params.name
//         if(!title)res.send("Event title empty");
//         console.log(title);
//         let documents=await Event.find({title});
//          console.log(documents);
//         res.send(documents);
//     }
//     catch(err){
//         res.send(err);
//     }
// }

//dynamic based search
exports.viewSpecified = async (req, res) => {
    try {
        console.log("Entered specified event function");
        let initialLetter = req.params.name.charAt(0); // Extract the first letter
        if (!initialLetter) res.send("Event title empty");

        console.log(`Initial letter: ${initialLetter}`);

        // Use a regular expression to search for titles starting with the initial letter
        let documents = await Event.find({ title: { $regex: `^${initialLetter}`, $options: 'i' } });
        console.log(documents);
        res.send(documents);
    } catch (err) {
        res.send(err);
    }
};

