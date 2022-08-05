const sequence = {
    _value: 1, //standard value
    get val() {return this._value++},
    set val(value) {
        if (value > this._value) {
            this._value = value
        }
    }
}

console.log(sequence.val, sequence.val)
sequence.val = 1000
console.log(sequence.val, sequence.val)
sequence.val = 900
console.log(sequence.val, sequence.val)
