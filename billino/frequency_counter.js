function name(arr1,arr2) {
    let frequency1 = {}
    let frequency2 = {}
    for (const iterator of arr1) {
        frequency1[iterator]  = (frequency1[iterator] || 0 ) + 1 
    }
    for (const iterator of arr2) {
        frequency2[iterator]  = (frequency2[iterator] || 0 ) + 1 
    }
    console.log(frequency1)
    console.log(frequency2)
    for (const key in frequency1) {
        if(frequency1[key] in frequency2){
            return false
        }
    }
    return true
    
}
let ss =name([1,2,4,2],[1,4,4,16])
console.log(ss)