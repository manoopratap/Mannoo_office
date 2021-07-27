let ss = [1,2,4,3,2,4]
let newArray =[]

function removeDuplicateValue(params) {
    for (let index = 0; index < ss.length; index++) {
        let getindex = newArray.includes(ss[index])
        if (!getindex) {
            newArray.push(ss[index])
        }
    }
    console.log(newArray)


// let ss =  array.reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]),[],);
//   console.log(ss)

// let ss =array.filter((ss,index)=> array.indexOf(ss)=== index)
// console .log(ss)
    
}

removeDuplicateValue()