//create server
let express=require("express");
let app =express();
const cors = require('cors');
app.use(cors());
app.options('/cse', cors());
const path= require('path');
//dotenv used to hide search the dotenv files
const dotenv=require('dotenv');
//configure the path of the dotenv file included
dotenv.config({path:'./server/config.env'})
const PORT=process.env.PORT;
//able to know the req 
const morgan=require('morgan');
console.log(PORT,"printing");
//middleware
app.use(express.json());//handles json files
app.use(express.urlencoded({extended:true}));
app.use(morgan('common'));

let uri='mongodb+srv://dillibabu12214:dillibabu2003@cluster0.nghsbws.mongodb.net/evento';
//creates mongose connection
let moongose=require("mongoose");
//for compass mongodb://127.0.0.1:27017/eventza"
moongose.connect(uri).then(()=>{
    console.log("coonnected to db ");
});
 //admin part
 const adminroute=require("./server/routes/admin");
//user part
 const userroute=require("./server/routes/user");
 const eventsroute=require("./server/routes/events");
 const historyroute=require("./server/routes/history");
 app.use('/admin',adminroute);
 app.use('/user',userroute);
 app.use('/events',eventsroute);
 app.use('/history',historyroute);
//  app.use('/')
// app.get('/cse',getExpenses);
// app.put('/cse',editExpense);
// app.post('/cse',createExpenses);
// app.patch('/cse/:id',(req,res)=>{
//     console.log(req.params);
//     res.send("fetchd patch");
// })
// app.delete('/cse',deleteExpense);
// var session = require("express-session");
// app.use(session({ secret: 'melody hensley is my spirit animal' }));
// const passport=require('passport');
// require('./auth.js');
// app.use(express.json());
// app.use(express.static(path.join(__dirname,'client')));
// app.get('/',(req,res)=>{
//     res.write('<a href="/auth/google">Google</a>');
//   res.end();
//  })
//  app.get('/auth/google',
//    passport.authenticate('google', { scope:
//        [ 'email', 'profile' ] }
//  ));

//  app.get( '/auth/google/callback',
//     passport.authenticate( 'google', {
//         successRedirect: '/auth/google/success',
//         failureRedirect: '/auth/google/failure'
//  }));
//  app.get('/auth/google/failure', (req,res)=>{
//      res.send("wrng")
//  })
//  app.get('/auth/google/success',isLoggedIn,(req,res)=>{
//    let name=req.user.displayName();
//    console.log(name);
//     res.send("success");
// })
// function isLoggedIn(req,res,next){
//     res.statusCode=302;
//     res.setHeader('Location','/');
//     req.user ? next():res.send("/");
// }


//  app.use(passport.initialize());
//  app.use(passport.session());
 app.listen(5000);