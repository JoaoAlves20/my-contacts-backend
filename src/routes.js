const { Router } = require('express')

const router = Router()

router.get('/', (request, response) => {
  response.send('Hello Express') 
})

module.exports = router