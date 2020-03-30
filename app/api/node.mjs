import {getHostname} from '../access/system'
import {getNodeStatus} from '../service/node'

export function node( req, res ) {
  res.json(getNodeStatus())
}
