const port = 3003

const express = require('express')
const app = express()

app.get('/products', (request,response,next) => {
    console.log('Moddleware 1...')
    next()
})

app.get('/products', (request,response,next) => {
    response.send({name:'noetic-sierra',status:'active'}) // converts to JSON
})

app.listen(port, () => {
    console.log(`\n** Server is active **\n > Port: ${port}\n`)
})