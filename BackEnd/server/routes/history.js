const express=require('express');
const router=express.Router();
const controller=require('../controller/historyController');

router.post('/register',controller.register);
router.get('/viewall/:name',controller.viewall);


module.exports=router;