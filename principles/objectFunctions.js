const character = {
    name: 'Luke Skywalker',
    height_cm: 172,
    weight_kg: 77,
    yearBorn: '19BBY',
    homeWorld: 'Tatooine',
    species: 'Human'
}

console.log(character)
console.log(Object.keys(character))
console.log(Object.values(character))
console.log(Object.entries(character))

Object.entries(character).forEach(e => {
    console.log(`${e[0]} : ${e[1]}`)
})

Object.entries(character).forEach( ([key,val]) => {
    console.log(`${key} : ${val}`)
})


Object.defineProperty(character, 'yearBorn', {
    enumerable: true,
    writable: false,
    value: '19BBY'
})

character.yearBorn = '52BBY'
console.log(character.yearBorn)
