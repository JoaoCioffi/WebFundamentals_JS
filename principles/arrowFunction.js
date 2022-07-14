let double = function(a) {
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
