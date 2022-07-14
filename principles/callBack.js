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


const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

// without callback
let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// using callback
let notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

// arrow function
let notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)


// callback in browser
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('The event has just occurred')
}
