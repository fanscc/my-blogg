var express=require('express');
var router = express.Router();
//form表单需要的中间件。
//var mutipart= require('connect-multiparty');

//var mutipartMiddeware = mutipart();
//app.use(mutipart({uploadDir:'./upload_file'}));
const controllers = require('../controll')


// router.post('/login', controllers.login.login.login); 
router.get('/indexhome', controllers.home.index.indexhome);
router.post('/addGood', controllers.home.index.addGood);
router.get('/detailshome', controllers.home.index.detailshome);
router.post('/updatahome', controllers.home.index.updatahome);
router.post('/delehome', controllers.home.index.delehome);
router.get('/searchhome', controllers.home.index.searchhome);
router.post('/login', controllers.login.login.login);
router.post('/register', controllers.login.login.register);
module.exports = router;