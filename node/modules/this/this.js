console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)


function logThis() {
    console.log('inner function...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
    console.log(this === module)
}
logThis()