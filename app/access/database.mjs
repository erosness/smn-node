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
  console.log("At database:", tableName, filepath)

  const db = new sqlite3.Database(filepath);
  db.serialize(()=> {
    // Use REPLACE to add to table. If the same second is allready present,
    // it will not be duplicated.

    let sqlstring = "SELECT * FROM ( " + tableName + ")"
    db.each(sqlstring, (err, result) => {
      console.log("In each", err, result)
    })
    db.close();
  })
//  let recObj = Object.assign({} ,updateObject)
//  if (recObj.ison){recObj.ison = 1}else{recObj.ison = 0}
//  recObj.mode = '"' + recObj.mode + '"'
}
