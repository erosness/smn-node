import {configInfo} from './config/configInfo';
import {getHostname} from './access/system';

import {servers} from './api/servers';
import {adm} from './api/adm';
import {admMiddleware} from './service/adm';

import express from 'express';
import cors from 'cors'
const app = express()
const port = process.env.SMN_PORT

app.use(cors())
app.get('/', (req, res) => res.send(`Hello World at ${getHostname()}\n`))

// Servers API
app.get('/v1/beha/servers', servers)

// Adm API
app.use('/v1/beha/adm', admMiddleware)
app.get('/v1/beha/adm', adm)


app.listen(port, () => console.log(`Example app listening on port ${port}`))
