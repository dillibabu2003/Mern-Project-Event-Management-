const express=require('express');
const router=express.Router();
const controller=require('../controller/adminController')
router.post('/register',controller.register);
router.get('/login/:name/:pass',controller.login);
// router.get('/',controller.get);
// router.post('/',controller.post);
router.get('/profile/:name',controller.profile);
module.exports=router;