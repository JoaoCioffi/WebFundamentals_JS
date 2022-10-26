let double = function (a) {
    return 2 * a
}

double = (a) => {
    return 2 * a
}

double = a => 2 * a // implicit return
console.log(double(Math.PI))

let say = function() {
    return 'hello world'
}

say = () => 'hello world'
say = _=> 'hello world'
console.log(say())


function persona(){
    this.age = 0

    setInterval(() => {
        this.age++
        console.log(this.age)
    }, 1000)
}

new persona

let compareWithThis = function (param) {
    console.log(this === param)
}

compareWithThis(global)

const obj = {}
compareWithThis = compareWithThis.bind(obj)
compareWithThis(global)
compareWithThis(obj)

let compareWithThisArrow = param => console.log(this === param)
compareWithThisArrow(global)
compareWithThisArrow(module.exports)
compareWithThisArrow(this)

compareWithThisArrow = compareWithThisArrow.bind(obj)
compareWithThisArrow(obj)
compareWithThisArrow(module.exports)
