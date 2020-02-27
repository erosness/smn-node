import {configInfo} from './config/configInfo';

import {info} from './api/info';
import {heat} from './api/heat';
import {tempGet, tempPost} from './api/temp';
import {tempMiddleware} from './service/temp';

import express from 'express';
const app = express()
const port = 5066

app.get('/', (req, res) => res.send(`Hello World at ${configInfo["name"]}\n`))

// Info API
app.get('/info', info)

// Heat API
app.get('/heat', heat)

// Temp API
app.use('/temp' , tempMiddleware)
app.get('/temp', tempGet)
app.post('/temp', tempPost)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
