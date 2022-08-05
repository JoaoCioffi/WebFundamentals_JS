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


function Product(name,price,discount) {
    this.name = name
    this.updatedPrice = () => {
        return (price * (1-discount)).toFixed(2)
    }
}

const p1 = new Product('Amberglance Mug',7.63,0.15)
console.log(p1.updatedPrice())

const p2 = new Product('Jasper Syrup Box',23.99,0.25)
console.log(p2.updatedPrice())
