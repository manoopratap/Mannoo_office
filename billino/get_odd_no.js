function getOddNo(data) {
    let newArray = []
    function innerFuction(params) {
        if (params.length <= 0) return
        if (params[0] % 2 !== 0) {
            newArray.push(params[0])
            innerFuction(params.slice(1))
        }
        else innerFuction(params.slice(1))
    }

    innerFuction(data)
    return newArray
}

let ss = getOddNo([1, 2, 3, 4, 6, 7,11])
console.log(ss)