function access(username,pw){
    
    const validate = username && pw 
    if (validate) console.log('Validated')
    
    const denied_1 = (username==undefined && pw) || (username && pw==undefined)
    if (denied_1) console.log('Incomplete')

    const denied_2 = username==undefined && pw==undefined
    if (denied_2) console.log('Access denied')

    return {validate,denied_1,denied_2}

}

console.log(access(username='cod3r',pw='$ASauiP71920754qil@#001'))
console.log(access(username='cod3r'))
console.log(access(pw='$ASauiP71920754qil@#001'))
console.log(access())
