import {getHostname} from '../access/system'
import {getAdmStatus} from '../service/adm'

export function adm( req, res ) {
  res.json(getAdmStatus())
}
