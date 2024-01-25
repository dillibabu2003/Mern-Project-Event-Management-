let History=require('../models/historymodel');
exports.register=async(req,res)=>{
    try{
          let {username,eventid,title,date,des}=req.body;
          console.log("Entered event register",title,date,des);
          if(!username||!eventid||!title||!date||!des) return res.send('some feilds are missing');
          const check =await History.exists({title});
          if(check){
            return res.send("Already the registered");
          }
          
          else{
          const user=await History.create({username,eventid,title,date,des});
        
          res.send('Eevnt is registered successfully');
          }
    }catch(error){
        res.send("error in registering")
    }
}
exports.viewall=async(req,res)=>{
    try{
        console.log("entered viewall history");
         let username=req.params.name;
         if(!username)return res.send("fields are empty");
         let  userdetail=await History.find({username});
         console.log(userdetail);
        res.send(userdetail);
    }catch(error){
        res.send("cant view");
    }
}