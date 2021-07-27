function check(params) {
    let left  = 0 ;
    let right = params.length - 1;
    while (left<right) {
        let sum = params[left]+params[right]
        if(sum === 0) return [params[left],params[right]]
        else if(sum > 0) right--
        else left++
    }

    
}
let ss = check([-2,-4,0,1,-1])
console.log(ss)