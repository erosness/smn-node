import {configInfo} from './config/configInfo';
import {getHostname} from './access/system';

import {servers} from './api/servers';
import {admGet, admPost} from './api/adm';
import {node} from './api/node';
import {nodeMiddleware} from './service/node';

import express from 'express';
import cors from 'cors'
const app = express()
const port = process.env.SMN_PORT

app.use(cors())
app.get('/', (req, res) => res.send(`Hello World at ${getHostname()}\n`))

// Servers API
app.get('/v1/beha/servers', servers)

// Node API
app.use('/v1/beha/node', nodeMiddleware)
app.get('/v1/beha/node', node)

// Adm API
app.get('/v1/beha/adm', admGet)
app.post('/v1/beha/adm',admPost, admGet)


app.listen(port, () => console.log(`Example app listening on port ${port}`))
