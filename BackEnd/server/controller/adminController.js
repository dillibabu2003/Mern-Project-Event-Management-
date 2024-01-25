let Admin=require('../models/adminmodel');
//checking the existence of admin
let adid=0;
exports.register=async(req,res)=>{
    try{
      const {adminname,email,adminpass,contact}=req.body;
      if(!adminname||!email||!adminpass||!contact)res.status(400).send('some feilds are missing');
      const check =await Admin.exists({adminname,email});
      if(check){
        return res.send("Already the data exists");
      }
      else{
      const admin=await Admin.create({adminid:adid+1,adminname,email,adminpass,contact});
    
      res.send('Admin is registered successfully');
      }
    }catch(error){
        res.status(500).send('Error in registering admin');
    }
}
exports.login=async(req,res)=>{
    try{
       // const {name,adminpass}=req.query;
      
        
        // if(!name||!adminpass) return res.send('some feilds are missing');
       
        let adminname=req.params.name;
       let adminpass=req.params.pass;
        //console.log(adminname);

       const documents = await Admin.findOne({adminname,adminpass})
        // const adminData =   await Admin.find(queryObj);
        // if (adminData.length!=0) {
        //   return res.status(404).send('Admin not found');
        // }
       console.log(documents,"printing");
       if(documents==null)return res.send("wrng fields");
       res.send(documents);
       
      }catch(error){
        console.log(error);
          res.status(500).send('not found')
      }
          
}
exports.profile=async(req,res)=>{
  
  try{
    let adminname=req.params.name;
   const documents = await Admin.findOne({adminname})
   console.log(documents);
   res.send(documents);
  }
  catch(error){
   res.send(error);
  }
}
// module.exports = {
// //     get:async(req,res)=>{
// //         let admin= await Admin.find({});
// //         return res.send(admin);
// //     },
// //     post:async(req,res)=>{
// //         let {name,email,pass,contact}=req.body;
// //         console.log(name,email);
       
// //         let admin= await new Admin({name,email,pass,contact}).save();
// //         res.send(`admin registered ${admin}`);
//     // }
// };