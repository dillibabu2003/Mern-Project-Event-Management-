let User=require('../models/usermodel');
exports.register=async(req,res)=>{
    try{
      const {name,email,userpass,contact}=req.body;
      console.log("Entered user register")
      if(!name||!email||!userpass||!contact) return res.send('some feilds are missing');
      const check =await User.exists({name,email});
      if(check){
        return res.send("Already the data exists");
      }
      else{
      const user=await User.create({name,email,userpass,contact});
    
      res.send('User is registered successfully');
      }
    }catch(error){
        res.status(500).send('Error in registering User');
    }
}
exports.login=async(req,res)=>{
    try{
      let name=req.params.username;
      let userpass=req.params.pass;
      //  if(!name||!userpass)res.status(400).send('some feilds are missing');
        // const check =await User.exists({userpass,email});
        // if(check){
        //   return res.send("Already the data exists");
        // }
        const documents = await User.findOne({name,userpass})
        
       console.log(documents,"printing");
       if(documents==null)return res.send("wrng fields");
       res.send(documents);
      }catch(error){
          res.status(500).send('error')
      }
          
}
exports.getprofile=async(req,res)=>{
  
  try{
    let name=req.params.username;
   const documents = await User.findOne({name})
   console.log(documents);
   res.send(documents);
  }
  catch(error){
   res.send(error);
  }
}
exports.setProfile=async(req,res)=>{
  try{
     
     const {_id,name,email,userpass,contact}=req.body;
     console.log("Entered setProfile",name,email);
     if(!_id||!name||!email||!userpass||!contact){
      res.send("some fields are misssing");
     }
     const documents=await User.updateOne({_id,name,email,userpass,contact});
     console.log("printing update value ",documents);
     res.send(documents);

  }catch(err){
    res.send(err);
  }
}
