const moduleA = require('../principles/moduleA.js')
console.log(moduleA.welcome)


const c = require('../index/index.js')
console.log(c.testIndex)


const http = require('http')
http.createServer((require,response) => {

    response.write('Hi there!')
    response.end()
}).listen(8080)