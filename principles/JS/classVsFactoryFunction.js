class Product{
    constructor(name,price,category){
        this.name = name,
        this.price = price,
        this.category = category
    }

    info() {
        console.log(`** Product info **\nname: ${this.name}\nprice: U$${this.price}\ncategory: ${this.category}`)
    }
    
}

const p1 = new Product('Vanilla Coloured Soda',1.26,'Drinks')
p1.info()


const product = (name,price,category) => {
    return {
        info: () => console.log(`** Product info **\nname: ${name}\nprice: U$${price}\ncategory: ${category}`)
    }
}

p2 = product('Jasper Knox Mug',5.99,'Utensills')
p2.info()
