const fs = require('fs')

const product = {
    name: 'Jasper Knox Mug',
    price: 12.89,
    discount: 0.05,
    category: 'utensils'
}

fs.writeFile(__dirname + '/generatedFile.json', JSON.stringify(product), err => {
    console.log(err || 'saved file successfully!')
})
