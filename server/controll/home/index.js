
var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '09701540325',       
  port: '3306',                   
  database: 'myblogg', 
}); 


async function addGood(req, res, next) {
  console.log(req.body)
  let title = req.body.title
  let conten = req.body.conten
  let type = req.body.type
  let sql = `insert into studylist (title,conten,type) values ('${title}','${conten}',${type})`
  connection.query(sql, function (err, result) {
    if (err) {
      return next(err); 
    } else {
      res.json({
          code: 0,
          data:{ 
            result: result              
          },
          message: '新增成功'
      })
    }
  })  
}



module.exports = {  
    addGood
}