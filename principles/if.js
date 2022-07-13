Number.prototype.between = function (inicio,fim){
    return this >= inicio && this <= fim
}

const printResult = function (number){
    if (number.between(50,100)){
        console.log('Condition 1.')
    }
    else if (number.between(0,50)){
        console.log('Condition 2.')
    }
    else {
        console.log('Condition 3.')
    }
}

printResult(50)
