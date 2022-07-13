const sys = (user,pw) => (user === 'cod3r' && pw==='748Hj$qP0') ? 'access approved' : 'access denied'
console.log(sys('cod3r','748Hj$qP0'))
console.log(sys('coder','123456789'))
console.log(sys('cod3r','123456789'))
console.log(sys('coder','748Hj$qP0'))


const sys2 = (user,pw) => {
    return (user === 'cod3r' && pw==='748Hj$qP0') ? 'access approved' : 'access denied'
}
console.log(sys2('cod3r','748Hj$qP0'))
console.log(sys2('coder','123456789'))
console.log(sys2('cod3r','123456789'))
console.log(sys2('coder','748Hj$qP0'))
