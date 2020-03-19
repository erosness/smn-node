import {configInfo} from './config/configInfo';
import {getHostname} from './access/system';

import {servers} from './api/servers';
import {info} from './api/info';
import {heat} from './api/heat';
import {tempGet, tempPost} from './api/temp';
import {tempMiddleware} from './service/temp';
import {infoMiddleware} from './service/info';

import express from 'express';
import cors from 'cors'
const app = express()
const port = process.env.SMN_PORT

app.use(cors())
app.get('/', (req, res) => res.send(`Hello World at ${getHostname()}\n`))

// Servers API
app.get('/v1/beha/servers', servers)

// Info API
app.use('/v1/beha/info', infoMiddleware)
app.get('/v1/beha/info', info)

// Heat API
app.get('/v1/beha/heat', heat)

// Temp API
app.use('/v1/beha/temp' , tempMiddleware)
app.get('/v1/beha/temp', tempGet)
app.post('/v1/beha/temp', tempPost)

app.listen(port, () => console.log(`Example app listening on port ${port}`))
