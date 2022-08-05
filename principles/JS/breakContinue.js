const nums = [1,2,3,4,5,6,7,8,9,10]

for(let ix in nums) {
    if(ix == 5) {
        break
    }
    console.log(`nums[${ix}] = ${nums[ix]}`)
}

for(let ix in nums){
    if(ix == 5) {
        continue
    }
    console.log(`nums[${ix}] = ${nums[ix]}`)
}

external:
for(let i in nums){
    for(let j in nums){
        if(i==2 && j==3){
            break external
        }
        console.log(`${i},${j}`)
    }    
}
console.log('End of execution...')
