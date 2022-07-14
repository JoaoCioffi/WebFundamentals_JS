function sum(a,b,c) {
    a = a || 1
    b = b || 1 
    c = c || 1
    return a+b+c
}

console.log(sum(),
            sum(3),
            sum(1,2,3),
            sum(0,0,0),
            sum(1,2,3,4))



function sum2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments  ? b : 1
    c = isNaN(c) ? 1 : c
    return a+b+c
}

console.log(sum2(),
            sum2(3),
            sum2(1,2,3),
            sum2(0,0,0),
            sum2(1,2,3,4))


function sum3(a=1,b=1,c=1){
    return a+b+c
}

console.log(sum3(),
            sum3(3),
            sum3(1,2,3),
            sum3(0,0,0),
            sum3(1,2,3,4))
