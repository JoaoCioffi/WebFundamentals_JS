const x = 'global'

function outer() {
    const x = 'local'
    function inner() {
        return x
    }
    return inner
}

const myFunction = outer()
console.log(myFunction())
