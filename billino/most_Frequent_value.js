let result = []
function name(params) {
    for (let index = 0; index < params.length; index++) {
        if (result.length < 1) {
            result.push({ data: params[index], counter: 1 })
        } else {
            let filterdta = result.filter((p) => p.data == params[index])
            if (filterdta.length == 1) {
                result.map((ss) => {
                    if (params[index] == ss.data) 
                        ss.counter = ss.counter + 1
                })
            } else 
                result.push({ data: params[index], counter: 1 })
        }
    }
    let t = result.reduce((a, b) => a.counter > b.counter ? a : b).counter;
    let finalData = result.filter((x) => x.counter == t)
    for (let index = 0; index < finalData.length; index++) {
        console.log(finalData[index].data);
    }



}

//for number only function migratoryBirds(arr) {
//     let max= 0 
//     let maxId =0
//     let store = new Array(6).fill(0)
//     for(const num of arr){
//         store[num] =store[num]+1;
//         console.log(store[num])
//         if(store[num]>max){
//             max =store[num]
//             maxId = num
//         }
//         else if(store[num] == max && num<maxId){
//             maxId = num
//         }
//     }
//     return maxId

//  }

//  let ss = migratoryBirds([5,1,6,3,3,5,5])
//  //console.log(ss)
name(['a', 'b', 'a', 'c', 'a', 'a', 'b'])
