import {getHostname} from '../access/system'
import {getIp} from '../access/system'

export function servers( req, res ) {
  res.json([
    { ip: getIp(), port: 5066 },
    { ip: getIp(), port: 5067 },
    { ip: getIp(), port: 5068 },
    { ip: getIp(), port: 5069 },
    { ip: getIp(), port: 5071 },
    { ip: getIp(), port: 5072 },
    { ip: getIp(), port: 5073 },
    { ip: getIp(), port: 5074 },
    { ip: getIp(), port: 5075 },
    { ip: getIp(), port: 5076 },
    { ip: getIp(), port: 5077 }
  ])
}
