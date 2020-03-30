import crypto from 'crypto'
import {getHostname, getOwnMac} from '../access/system'

export function admMiddleware( req, res, next ) {
// no Info Middleware yet  console.log("At infoMiddleware!!")
  console.log("admMiddleware:", req.query)
  next()
}
