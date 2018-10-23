
var mysql  = require('mysql');  
var jwt = require('jsonwebtoken');
var connection = mysql.createConnection({     
    host     : '123.56.27.207',       
    user     : 'root',              
    password : '09701540325',       
    port: '3306',                   
    database: 'cky', 
}); 

connection.connect();

function login(req, res, next) {
    var user = req.body.user
    var password = req.body.Password 
    console.log(req.body)
    let sql = `select * from loginuser where user='${user}' and password='${password}'`
    connection.query(sql,function (err, result) {
        if(err){
            return next(err);
        } else {
            if (result.length === 0) {
                res.json({
                    code: 1,
                    data:{},
                    message: '用户名或密码错误'
                })
            } else {
                let content ={user:user}; // 要生成token的主题信息
                let secretOrPrivateKey="cky" // 这是加密的key（密钥） 
                let token = jwt.sign(content, secretOrPrivateKey, {
                    expiresIn: 60*60*1  // 1小时过期
                });
                res.json({
                    code: 0,
                    data:{ 
                        token: token,
                        user:user,
                        result: result            
                    },
                    message: '登陆成功'
                })
            }
            
        }             
    });
}

function register(req, res, next) {
    var user = req.body.user
    var password = req.body.Password 
    let sql = `insert into loginuser (user,password) values ('${user}','${password}')`
    connection.query(sql,function (err, result) {
        if (err) {
            return next(err);
        } else {
            let content ={user:user}; // 要生成token的主题信息
            let secretOrPrivateKey="cky" // 这是加密的key（密钥） 
            let token = jwt.sign(content, secretOrPrivateKey, {
                expiresIn: 5  // 1小时过期
            });
            res.json({
                code: 0,
                data:{
                    user:user,
                    token: token
                },
                message: '注册成功'
            })
        }
    })
}

module.exports = {
    login,
    register
}