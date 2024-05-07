const express = require('express')
const router = require('./routes')

const app = express()

app.use(router)

app.listen(1810, () => console.log('Server started in http://localhost:1810'))