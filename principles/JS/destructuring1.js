let customer = {
    id: 148029,
    name: 'Raymond Holt',
    age: 45,
    address: {
        country: 'USA',
        stateOrProvince: 'California',
        city: 'Los Angeles',
        street: 'Yellowstone St',
        number: 1900,
        zipCode: '1222.500-000'
    }
}
console.log(customer)

// destructuring assignment
const {name, age} = customer
console.log(name,',',age)

const {name:n, age:a} = customer
console.log(n,',',a)

const {address: {country,stateOrProvince,city}} = customer;
console.log(country,stateOrProvince,city)
