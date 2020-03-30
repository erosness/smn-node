import os from 'os';

export function getHostname() {
  return os.hostname()
}

export function getOwnMac() {
  const ifs = os.networkInterfaces()
  for (const property in ifs) {
    if( /^e[tn]/.test(property) ) {
      return(ifs[property][0].mac)
    }
  }
  return "00:11:22:33:44:55"
}

export function getIp() {
  const ifs = os.networkInterfaces()
  for (const property in ifs) {
    if( /^e[tn]/.test(property) ) {
      return(ifs[property][0].address)
    }
  }
}

export function getPairId (port) {
  const hmac = crypto.createHmac('md5', 'X')
  hmac.update(getOwnMac())
  hmac.update(port)
  return hmac.digest('hex')
}
