const car = {
    model: 'A4',
    year: 2014,
    value: 89000.00,
    owner: {
        name: 'Elliot McCaulley',
        age: 42
    }
}

console.log(car)
console.log(car.owner.name)
console.log(car['owner']['name'])

car['owner']['address'] = 'Avenue Street, 412, NY.'
console.log(car)

delete car.owner
console.log(car)
