function fectorial(params) {
    if(params  == 1) return 1
    return params*fectorial(params-1)
}

let ss = fectorial(5)
console.log(ss)