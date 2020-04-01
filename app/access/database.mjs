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
  return new Promise((resolve, reject) => {
    db.query(sqlstring, (error, results, fields) => {
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
  return new Promise((resolve, reject) => {
    db.query(sqlstring, (error, results, fields) => {
      if(error != undefined){
        reject(error)
      }else{
        resolve(results)
      }
    })
  })
}

export function updateMySQL(tableName, uid, data) {
  const db = new mysql.createConnection({
    host: 'mysql02.uniweb.no',
    user: 'd33634',
//    debug: 'true',
    password: 'TWbowaw-1975',
    database: 'd33634',
  })

  let assignmentString = ''
  for(let ix of Object.keys(data)) {
    if(assignmentString != ''){
      assignmentString += ', '
    }
    assignmentString += ix + ' = ' + db.escape(data[ix])
  }

  const sqlstring = 'UPDATE '
                    + tableName
                    + ' SET '
                    + assignmentString
                    + ' WHERE uid = '
                    + db.escape(uid)
                    + ';'

  return new Promise((resolve, reject) => {
    db.query(sqlstring, (error, results, fields) => {
      if(error != undefined){
        reject(error)
      }else{
        resolve(results)
      }
    })
  })
}
