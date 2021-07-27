function missingNo(params) {
 let array = [1,3,6,8];
 let newArray = []
    for (let index = 1; index < 10; index++) {
        let ss = array.includes(index);
        if (!ss) {
            newArray.push(index)
        }
    }
    console.log(newArray)
}

missingNo()