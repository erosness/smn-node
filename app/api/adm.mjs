import { fetchMySQL, insertMySQL } from '../access/database'

export function admGet( req, res) {
// no Info Middleware yet  console.log("At infoMiddleware!!")
  insertMySQL("units",req.query.nid)
  .then((result) => {
    return fetchMySQL("units",req.query.nid)
  })
  .then((result) => {
      console.log("Result=", result)
      res.json(result)
      return result
    })
  .catch((error) => {
    console.log("Error=", error.errno)
    if(error != undefined) {
      res.status(500)
         .send('500 Interal server error: MySql error ' + error.errno + "\n")
    }
  })
}

export function admPost( req, res, next ) {
  console.log("At admPost:", req.query.nid)
  next()
}
