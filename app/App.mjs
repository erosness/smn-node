import {info} from './api/info';

import express from 'express';
const app = express()
const port = 5066

app.get('/', (req, res) => res.send('Hello World?'))
app.get('/info', info)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
