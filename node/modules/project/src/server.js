const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database.js')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/products', (request,response,next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/products', (request,response,next) => {
    response.send(database.getProducts())
})

app.get('/products/:id',(request,response,next) => {
    response.send(database.getProduct(request.params.id))
})

app.get('/products', (request,response,next) => {
    response.send({name:'noetic-sierra',status:'active'}) // converts to JSON
})

app.post('/products',(request,response,next) => {
    const product = database.saveProduct({
        name: request.body.name,
        price: request.body.price
    })
    response.send(product) // JSON
})

app.listen(port, () => {
    console.log(`\n** Server is active **\n > Port: ${port}\n`)
})