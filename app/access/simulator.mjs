import fs from 'fs'

export function getSimulator(name, fileName) {

  const filePath = '/home/erik/smn/simdata/Port'
                  + process.env.SMN_PORT
                  + '/'
                  + name
                  + '/'
                  + fileName
                  + '.json'
  console.log("Simulator:", filePath)
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  }
  return undefined
}
