const printResult = function (number){
    switch (Math.floor(number)){
        default:
            console.log('Default Case')
            break
        case 10:
        case 9:
            console.log('Case (i)')
            break
        case 8: case 7: case 6:
            console.log('Case (ii)')
            break
    }
}

printResult(10)
printResult(12)
printResult(6)
printResult(NaN)
