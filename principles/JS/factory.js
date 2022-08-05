// with no factory (multiple lines and repetition)
const product_1 = {
    name: 'Gloomy Buppler Box',
    price: 83.57,
    category: 'Office'
}

const product_2 = {
    name: 'Jasper Knox Mug',
    price: 5.99,
    category: 'Utensils'
}


// simple factory
function createsProduct(name='defaultName',price=NaN,category=null) {
    return { 
        name,
        price,
        category
    }
}

const product_3 = createsProduct('Vanilla Coloured Soda',1.26,'Drinks')
console.log(product_3)

const product_4 = createsProduct('Indigo Pearlescent Book',38.53,'Library')
console.log(product_4)
