import { getHostname, getIp } from '../access/system'
import { getPairId } from '../service/adm'

export function servers( req, res ) {
  res.json([
    { ip: getIp(), port: 5066, pairId: getPairId("5066") },
    { ip: getIp(), port: 5067, pairId: getPairId("5067") },
    { ip: getIp(), port: 5068, pairId: getPairId("5068") },
    { ip: getIp(), port: 5069, pairId: getPairId("5069") },
    { ip: getIp(), port: 5071, pairId: getPairId("5071") },
    { ip: getIp(), port: 5072, pairId: getPairId("5072") },
    { ip: getIp(), port: 5073, pairId: getPairId("5073") },
    { ip: getIp(), port: 5074, pairId: getPairId("5074") },
    { ip: getIp(), port: 5075, pairId: getPairId("5075") },
    { ip: getIp(), port: 5076, pairId: getPairId("5076") },
    { ip: getIp(), port: 5077, pairId: getPairId("5077") }
  ])
}
