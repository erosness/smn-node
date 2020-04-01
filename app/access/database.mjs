import mysql from 'mysql'

const port = process.env.SMN_PORT

export function fetchMySQL(tableName, uid) {

  const db = new mysql.createConnection({
    host: 'mysql02.uniweb.no',
    user: 'd33634',
//    debug: 'true',
    password: 'TWbowaw-1975',
    database: 'd33634',
  })

  const sqlstring = 'SELECT * FROM units WHERE uid=' + db.escape(uid) + ';'
//  console.log("string:", sqlstring)
  return new Promise((resolve, reject) => {
    db.query(sqlstring, (error, results, fields) => {
//      console.log("Query callback:",error)
      if(error != undefined){
        reject(error)
      }else{
        resolve(results)
      }
    })
  })
}

export function insertMySQL(tableName, uid) {
  const db = new mysql.createConnection({
    host: 'mysql02.uniweb.no',
    user: 'd33634',
//    debug: 'true',
    password: 'TWbowaw-1975',
    database: 'd33634',
  })
  const sqlstring = 'INSERT IGNORE INTO '
                    + tableName
                    + '(uid) VALUES('
                    + db.escape(uid)
                    + ');'
  console.log("string:", sqlstring)
  return new Promise((resolve, reject) => {
    db.query(sqlstring, (error, results, fields) => {
      console.log("Query callback:",error,results)
      if(error != undefined){
        reject(error)
      }else{
        resolve(results)
      }
    })
  })
}

export function updateMySql(tableName, uid, data) {
  const db = new mysql.createConnection({
    host: 'mysql02.uniweb.no',
    user: 'd33634',
//    debug: 'true',
    password: 'TWbowaw-1975',
    database: 'd33634',
  })

  let assignmentList = []
  for(let ix in data.keys) {
    console-log("The keys", ix)
  }

  const sqlstring = 'UPDATE '
                    + tableName
                    + ' SET '
                    + db.escape(uid)
                    + ');'
  console.log("string:", sqlstring)
  /*
  return new Promise((resolve, reject) => {
    db.query(sqlstring, (error, results, fields) => {
      console.log("Query callback:",error,results)
      if(error != undefined){
        reject(error)
      }else{
        resolve(results)
      }
    })
  })
  */
}
