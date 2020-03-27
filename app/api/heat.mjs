import { getSimulator } from '../access/simulator.mjs'
import express from 'express'

export function generalGet( req, res ) {
  const splitPath = req.path.split('/')
  console.log("At generalGet:", splitPath)
  const responseObject = getSimulator(splitPath[3],splitPath[4])
  if (responseObject == undefined) {
    res.sendStatus(404)
  }
  res.send(JSON.stringify(responseObject))
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
