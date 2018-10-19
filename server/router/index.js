var express=require('express');
var router = express.Router();
//form表单需要的中间件。
//var mutipart= require('connect-multiparty');

//var mutipartMiddeware = mutipart();
//app.use(mutipart({uploadDir:'./upload_file'}));
const controllers = require('../controll')


// router.post('/login', controllers.login.login.login); 

router.post('/addGood', controllers.home.index.addGood);


module.exports = router;