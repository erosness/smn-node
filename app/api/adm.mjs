import { fetchMySQL, insertMySQL, updateMySQL } from '../access/database'

export function admGet( req, res) {
  insertMySQL("units",req.query.uid)
  .then((result) => {
    return fetchMySQL("units",req.query.uid)
  })
  .then((result) => {
      res.json(result)
      return result
  })
  .catch((error) => {
    if(error != undefined) {
      res.status(500)
         .send('500 Interal server error: MySql error ' + error.errno + "\n")
    }
  })
}

export function admPost( req, res, next ) {
  updateMySQL("units", req.query.uid, req.body)
  .then((result) => {
      if(result.affectedRows != 1) {
        res.status(500)
           .send('500 Interal server error: Rows affeced = '
           + result.affectedRows
           + ", expected 1.\n")
      }else{
        return next()
      }
  })
  .catch((error) => {
    if(error != undefined) {
      res.status(500)
         .send('500 Interal server error: MySql error ' + error.errno + "\n")
    }
  })
}
