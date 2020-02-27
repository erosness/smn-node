import {getHostname} from '../access/system'
import {getInfoStatus} from '../service/info'

export function info( req, res ) {
  res.json(getInfoStatus())
}
