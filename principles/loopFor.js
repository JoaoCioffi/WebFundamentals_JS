// with var
for (var i=0; i<16; i++){
    console.log(`sqrt(${i}) = ${(i**0.5).toFixed(3)}`)
}
console.log('i = ',i)

const funcs = []
for (var i=0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

// with let
const funcs2 = []
for (let i=0; i<10; i++){
    funcs2.push(function(){
        console.log(i)
    })
}
funcs2[2]()
funcs2[8]()

let counter = 1
while(counter <= 10) {
    console.log(`counter = ${counter}`)
    counter++
}

for(let i=1; i<=10; i++) {
    console.log(`i = ${i}`)
}

const x = [-1.225, 2.080, -13.291, 8.333, 5.729]
console.log(`x = [${x}]`)
for(let i=0; i<x.length; i++) {
    console.log(`x[${i}] = ${x[i]}`)
}
