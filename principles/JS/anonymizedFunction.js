const sum = function (x,y) {
    return x + y
}

const printResult = function (x,y,operation=sum) {
    console.log(operation(x,y))
}

printResult(3,4)
printResult(3,4,sum)
printResult(3,4,function (x,y) {
    return x - y
})
printResult(3,4, (x,y) => x * y)


const persona = {
    say: function () {
        console.log('Hi, there!')
    }
}

persona.say()
