import {getHostname} from '../access/system'

export function info( req, res ) {
  console.log("At infoXX!!")
  res.json({ name: getHostname()})
}
