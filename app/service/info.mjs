import crypto from 'crypto'
import {getHostname} from '../access/system'
export function infoMiddleware( req, res, next ) {
// no Info Middleware yet  console.log("At infoMiddleware!!")
  console.log("HMAC.digest ", getFid('per'), " ...\n")
  next()
}

const hmac = crypto.createHmac('md5', 'X')

function getFid (functionName) {
  hmac.update(functionName)
  return hmac.digest('hex')
}

export function getInfoStatus() {
  return({name: getHostname()})
}
