function getPrice(tax=0, currency='U$'){
    return `${currency}${(this.price * (1 - this.discount) * (1 + tax)).toFixed(2)}`
}


// Standard Function Call
const product_1 = {
    name: 'Indigo Pearlescent Book',
    price: 38.53,
    discount: 0.15,
    getPrice
}

console.log(product_1.getPrice())


// Call and Apply methods
const product_2 = {price: 599.99, discount:0.25}
console.log(getPrice.call(product_2))
console.log(getPrice.apply(product_2))
