const automotiveBrands = ['Mercedes','Audi',
                          'BMW','Porsche']

function print(name,index){
    console.log(`${index + 1}. ${name}`)
}

automotiveBrands.forEach(print)
automotiveBrands.forEach(function(a) {
    console.log(a)
})
automotiveBrands.forEach(automotiveBrands => console.log(automotiveBrands))
