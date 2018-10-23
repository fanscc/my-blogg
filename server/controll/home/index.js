
var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : '123.56.27.207',       
  user     : 'root',              
  password : '09701540325',       
  port: '3306',                   
  database: 'cky', 
}); 

function limitgoods(req, res, next) {
  return new Promise((resolve, reject) => {
    debugger
    let page = req.query.page ? (parseInt(req.query.page)-1)*20 : 0
    let searchQuery = req.query.title ? req.query.title : ''
    let type = req.query.type? req.query.type : ''
    let sql = `select * from student limit ${page},20` 
    if (type) {
      sql = `select * from student where type='${type}' and title LIKE '%${searchQuery}%' limit ${page},20` 
    } else {
      sql = `select * from student where title LIKE '%${searchQuery}%' limit ${page},20` 
    }
    connection.query(sql, function (err, result) {
          if (err) {
            resolve({code: 1, err: err});
          } else {
            resolve({code: 0, result: result});
          }
        })  
  })
}

function tatalgoods(req, res, next) {
  return new Promise((resolve, reject) => {
    debugger
    let searchQuery = req.query.title ? req.query.title: ''
    let sql = `select count(*) as tatal from student`
    let type = req.query.type ? req.query.type: ''
    if (type) {
      sql = `select count(*) as tatal from student where type='${type}' and title LIKE '%${searchQuery}%'`
    } else {
      sql = `select count(*) as tatal from student where title LIKE '%${searchQuery}%'`
    }
    connection.query(sql, function (err, result) {
      if (err) {
        resolve({code: 1, err: err});
      } else {
        resolve({code: 0, result: result});
      }
    })  
  })
}

async function indexhome(req, res, next) {
  let data  = await limitgoods(req, res, next)
  let tataldata  = await tatalgoods(req, res, next)
  if (data.code === 0 && tataldata.code === 0) {
    res.json({
        code: 0,
        data:{ 
            result: data.result,
            tatal: tataldata.result[0].tatal       
        },
        message: '成功'
    })
  } else {
    if (data.code !== 0) {
      return next(data.err);
    } else {
      return next(tataldata.err);
    }
  }
}

async function addGood(req, res, next) {
  let title = req.body.title
  let conten = req.body.conten
  let type = req.body.type
  let typeName = req.body.typeName
  let sql = `insert into student (title,conten,typeName,type) values ('${title}','${conten}','${typeName}',${type})`
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

function detailshome(req, res, next) {
  let id = req.query.id
  let sql = `select * from student where id=${id}`
  connection.query(sql, function (err, result) {
    if (err) {
      return next(err); 
    } else {
      res.json({
          code: 0,
          data:{ 
            result: result              
          },
          message: '查询成功'
      })
    }
  })  
}

function updatahome(req, res, next) {
  let id = req.body.id
  let title = req.body.title
  let conten = req.body.conten
  let typeName = req.body.typeName
  let type = req.body.type
  let sql = `update student set title='${title}',conten='${conten}',typeName='${typeName}', type=${type} where id=${id}`
  connection.query(sql, function (err, result) {
    if (err) {
      return next(err); 
    } else {
      res.json({
          code: 0,
          data:{ 
            result: result              
          },
          message: '编辑成功'
      })
    }
  })  
}

function delehome(req, res, next) {
  let id = req.body.id
  let sql = `delete from student where id=${id}`
  connection.query(sql, function (err, result) {
    if (err) {
      return next(err); 
    } else {
      res.json({
          code: 0,
          data:{ 
            result: result              
          },
          message: '删除成功'
      })
    }
  })  
}

function searchhome(req, res, next) {
  let type = req.query.type
  let title = req.query.title
  let sql
  console.log(type);
  console.log(title)
  if (type) {
    sql = `select * from student where type=${type} and title LIKE '%${title}%'`
  } else {
    sql = `select * from student where title LIKE '%${title}%'`
  }
  connection.query(sql, function (err, result) {
    if (err) {
      return next(err); 
    } else {
      res.json({
          code: 0,
          data:{ 
            result: result              
          },
          message: '查询成功'
      })
    }
  })  
}

module.exports = {  
    indexhome,
    addGood,
    detailshome,
    updatahome,
    delehome,
    searchhome
}