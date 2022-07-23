const fs = require('fs')

const filePath = __dirname + '/file.json'

// Synchronous reading
const content = fs.readFileSync(filePath, 'utf-8')
console.log(content)

// Asynchronous reading
fs.readFile(filePath, 'utf-8', (err,content) => {
    const config = JSON.parse(content)
    console.log(`${config.db.host}:${config.db.port}`)
})


const config = require('./file.json')
console.log(config.db)


fs.readdir(__dirname, (err,files) => {
    console.log('Directory Content:')
    console.log(files)
})