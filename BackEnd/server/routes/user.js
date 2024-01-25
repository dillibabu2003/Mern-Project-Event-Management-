const express=require('express');
const router=express.Router();
const controller=require('../controller/userController');

router.post('/register',controller.register);
router.get('/login/:username/:pass',controller.login);
router.get('/profile/:username',controller.getprofile);
router.post('/profile/update',controller.setProfile);
module.exports=router;