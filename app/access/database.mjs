import fs from 'fs'
import sqlite3 from 'sqlite3'

const port = process.env.SMN_PORT

export function fetchDb(funcName, tableName) {
  // Establish dir and file
  const filepath = "/home/erik/smn/simdata/Port"
    + port
    + "/"
    + funcName
    + "/sqlite-"
    + funcName
    + ".db"

  // Open database
  let queryResult = []

  const db = new sqlite3.Database(filepath);
  db.serialize(()=> {

    let sqlstring = "SELECT * FROM ( " + tableName + ")"
    db.each(sqlstring, (err, result) => {
      if(result.ison == 0){
        result.ison = false
      }else{
        result.ison = true
      }
      queryResult.push(result)
    })
  })

  return new Promise((resolve, reject)=>{
    db.close((err)=> {
      if(err){
        reject(err)
      }else{
        const resultObject = {  length: queryResult.length,
                          offset: 0,
                          total: queryResult.length,
                          items: queryResult }
        resolve(resultObject)
      }
    })
  })
}
