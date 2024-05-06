const express = require('express');
const router = require('./routes')

const app = express()

app.use(router)

const PORT = 1810

app.listen(PORT, () => console.log(`Server started in http://localhost:${PORT}`))