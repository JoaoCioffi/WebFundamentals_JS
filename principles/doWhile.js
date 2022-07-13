function getRandomInteger(min,max) {
    const value = Math.random() * (max-min) + min
    return Math.floor(value)
}

let option = -1 // initial value

do {
    option = getRandomInteger(-1,10)
    console.log(`Current value: ${option}`)
} while (option != -1)

console.log('End of execution...')
