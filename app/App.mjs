import {configInfo} from './config/configInfo';
import {getHostname} from './access/system';

import {info} from './api/info';
import {heat} from './api/heat';
import {tempGet, tempPost} from './api/temp';
import {tempMiddleware} from './service/temp';
import {infoMiddleware} from './service/info';

import express from 'express';
const app = express()
const port = 5066

app.get('/', (req, res) => res.send(`Hello World at ${getHostname()}\n`))

// Info API
app.use('/info', infoMiddleware)
app.get('/info', info)

// Heat API
app.get('/heat', heat)

// Temp API
app.use('/temp' , tempMiddleware)
app.get('/temp', tempGet)
app.post('/temp', tempPost)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
