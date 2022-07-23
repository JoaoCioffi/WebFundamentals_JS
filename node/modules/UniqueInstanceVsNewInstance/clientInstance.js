const counterA = require('./uniqueInstance.js')
const counterB = require('./uniqueInstance.js')

const counterC = require('./newInstance.js')()
const counterD = require('./newInstance.js')()


counterA.inc()
counterA.inc()
console.log(counterA.value,counterB.value)

counterC.inc()
counterC.inc()
console.log(counterC.value, counterD.value)