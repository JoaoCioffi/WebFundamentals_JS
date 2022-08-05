function area(height,width){
    const area = height * width
    if(area > 20){
        console.log(`This is a value above the limit for this purpose: Area = ${area.toFixed(4)}m²`)
    }
    else{
        return area
    }
}

console.log(area(2.55,1.225))
console.log(area(30.55,1.225))
console.log(area(30.55))
console.log(area())
console.log(area(10.113,1.525,3))

function sum() {
    let sum = 0
    for(i in arguments) {
        sum += arguments[i]
    }
    return sum
}
console.log(sum())
console.log(sum(1,2))
console.log(sum(1,2,3))
console.log(sum(1,2,3,4,'test'))
