const anonymous = process.argv.indexOf('-a') ==! -1
console.log(anonymous)

if(anonymous) {
    process.stdout.write('Anonymous stdout...')
    process.exit()
}
else{
    process.stdout.write('This is not an anonymous stdout...')
    process.stdin.on('data', data => {
        const name = data.toString().replace('\n','')
        process.stdout.write(`${name}`)
        process.exit()
    })
    
}