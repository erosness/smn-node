const port = process.env.SMN_PORT

export function fetchMySQL(funcName, tableName) {
  // Establish dir and file

  // Open database
  let queryResult = []
  const db = {}

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
