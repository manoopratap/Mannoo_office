function migratoryBirds(arr) {
    let max= 0 
    let maxId =0
    let store = new Array(6).fill(0)
    for(const num of arr){
        store[num] =store[num]+1;
        console.log(store[num])
        if(store[num]>max){
            max =store[num]
            maxId = num
        }
        else if(store[num] == max && num<maxId){
            maxId = num
        }
    }
    return maxId

 }

 let ss = migratoryBirds([5,1,6,3,3,5,5])
 //console.log(ss)