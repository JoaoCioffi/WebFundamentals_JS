const wine_1 = {
    fixedAcidity: 4.6,
    volatileAcidity: 0.12,
    citricAcid: 0.04,
    residualSugar: 0.9,
    density: 0.991,
    pH: 2.74
}

const wine_2 = {
    fixedAcidity: 5.3,
    volatileAcidity: 0.28,
    citricAcid: 0.03,
    residualSugar: 0.7,
    density: 0.996,
    pH: 3.71
}


console.log(wine_1.__proto__)
console.log(wine_1.__proto__ === Object.prototype)
console.log(wine_2.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


function myObject() {}
console.log(typeof Object, typeof myObject)
console.log(Object.prototype, myObject.prototype)
