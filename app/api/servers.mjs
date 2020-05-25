import { getHostname, getIp } from '../access/system'
import { getPairId } from '../service/node'

export function servers( req, res ) {
  res.json([
    { ip: getIp(), port: 5066, uid: getPairId("5066") },
    { ip: getIp(), port: 5067, uid: getPairId("5067") },
    { ip: getIp(), port: 5068, uid: getPairId("5068") },
    { ip: getIp(), port: 5069, uid: getPairId("5069") },
    { ip: getIp(), port: 5071, uid: getPairId("5071") },
    { ip: getIp(), port: 5072, uid: getPairId("5072") },
    { ip: getIp(), port: 5073, uid: getPairId("5073") },
    { ip: getIp(), port: 5074, uid: getPairId("5074") },
    { ip: getIp(), port: 5075, uid: getPairId("5075") },
    { ip: getIp(), port: 5076, uid: getPairId("5076") },
    { ip: getIp(), port: 5077, uid: getPairId("5077") }
  ])
}
