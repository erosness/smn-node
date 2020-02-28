import crypto from 'crypto'
import {getHostname, getOwnMac} from '../access/system'

export function infoMiddleware( req, res, next ) {
// no Info Middleware yet  console.log("At infoMiddleware!!")
  next()
}

export function getFid (functionName) {
  const hmac = crypto.createHmac('md5', 'X')
  hmac.update(functionName)
  hmac.update(getOwnMac())
  return hmac.digest('hex')
}

export function getInfoStatus() {
  return({
    name: getHostname(),
    mac:getOwnMac(),
    cap: [{
      cap: "heat",
      fid: getFid("heat")
    },{
      cap: "temp",
      fid: getFid("temp")
    }
  ]})
}
