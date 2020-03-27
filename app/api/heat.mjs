import express from 'express'
import { getSimulator } from '../access/simulator'
import { fetchDb } from '../access/database'

export function generalGet( req, res ) {
  const splitPath = req.path.split('/')
  console.log("At generalGet:", splitPath)
  switch (splitPath[4]) {
    case 'status':
      const responseObject = getSimulator(splitPath[3],splitPath[4])
      if (responseObject == undefined) {
        res.sendStatus(404)
      }
      res.send(JSON.stringify(responseObject))
      break;
    case 'minutes':
    case 'hours':
    case 'days':
    case 'weeks':
      console.log("Get table:",splitPath[4])
      fetchDb("heat",splitPath[4])
      res.sendStatus(404)
      break;
    default:
      res.sendStatus(404)
      break;
  }
}

export function generalPost( req, res ) {
  const splitPath = req.path.split('/')
  console.log("At generalPost:", splitPath)
  const responseObject = getSimulator(splitPath[3],splitPath[4])
  if (responseObject == undefined) {
    res.sendStatus(404)
  }
  res.send(JSON.stringify(responseObject))
}
