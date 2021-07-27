// function find_pair_of_given_some(array) {

//    for (let i = 0; i < array.length; i++) {
//         for (let j = i; j < array.length; j++) {
//             if((array[i]+array[j])==10){
//                 console.log(array[i],array[j])
//             }
//         }
       
//    }
// }

function find_pair_of_given_some(params,sum) {
    let result = [];
    let indexValue  =  new Map();
    for (let index = 0; index < params.length; index++) {
        let num = params[index];
        let comp = sum-num;
        if(indexValue.has(comp)){
            result[0]= indexValue.get(comp);
            result[1] = index
            console.log(result)
            return result
        }
        indexValue.set(num,index)
        console.log(indexValue)
        
    }
    return result
    

    
}



let array = [1,3,9,5,7,8,9]
find_pair_of_given_some(array,11)