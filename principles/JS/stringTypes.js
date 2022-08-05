let user = 'Cod3r'

// Gets the position using element
console.log(user.indexOf('C'))
console.log(user.indexOf('o'))
console.log(user.indexOf('d'))
console.log(user.indexOf('3'))
console.log(user.indexOf('r'))

// Gets the element using positions
console.log(user.charAt(0))
console.log(user.charAt(1))
console.log(user.charAt(2))
console.log(user.charAt(3))
console.log(user.charAt(4))

// unicode table value for these elements
console.log(user.charCodeAt(0))
console.log(user.charCodeAt(1))
console.log(user.charCodeAt(2))
console.log(user.charCodeAt(3))
console.log(user.charCodeAt(4))

// Returns a substring from a specific position (can be limited)
console.log(user.substring(0))
console.log(user.substring(1))
console.log(user.substring(2))
console.log(user.substring(3))
console.log(user.substring(4))
console.log(user.substring(0,4))

// Concatenate
console.log(('username: ').concat('_').concat(user).concat('_'))

// Replace
console.log(user.replace(3,'e'))
console.log(user.replace(/\d/,'e')) // RegEx (all digits)
console.log(user.replace(/\w/g,'e')) // RegEx (all words with Global flag)

// Array of strings with split method
console.log(('user_01,user_02,user_03').split(',')) // uses comma as separator

// Template string
let template = `
Welcome, ${user}!
This is a test...
`
console.log(template)

// Arrow Function
const up = text => text.toUpperCase()
console.log(`Hey... ${up('be careful')}!`)
