const express=require('express');
const router=express.Router();
const controller=require('../controller/eventController');

router.post('/register',controller.register);
router.get('/viewevents',controller.viewall);
router.get('/:name',controller.viewSpecified);
router.delete('/del/:id',controller.delete);
module.exports=router;