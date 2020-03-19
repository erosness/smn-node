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
  hmac.update(process.env.SMN_PORT)
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

export function getPairId (port) {
  const hmac = crypto.createHmac('md5', 'X')
  hmac.update(getOwnMac())
  hmac.update(port)
  return hmac.digest('hex')
}
