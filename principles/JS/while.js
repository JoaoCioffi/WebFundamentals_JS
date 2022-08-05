function getRandomInteger(min,max) {
    const value = Math.random() * (max-min) + min
    return Math.floor(value)
}

let option = 0 // initial value

while (option != -1) {
    option = getRandomInteger(-1,10)
    console.log(`Current value: ${option}`)
}

console.log('End of execution...')
