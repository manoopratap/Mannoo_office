let data = [1,5,20,4,45]
let sortedData = []
let result = []

function maxMinValue(params) {
   for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
        if (data[i] > data[j]) {
            let temp = data[i]
            data[i]= data[j]
            data[j]= temp
        } 
    }
    sortedData.push(data[i])
   }
   result.push(sortedData[0])
   result.push(sortedData[sortedData.length - 1])
   console.log(result)


//method2 for min max value
return params.reduce((acc, val) => {
    acc[0] = ( acc[0] === undefined || val < acc[0] ) ? val : acc[0]
    acc[1] = ( acc[1] === undefined || val > acc[1] ) ? val : acc[1]
    return acc;
}, []);

// mothod 3 for max min value

let ss = params.reduce((maxvalue,data)=>(
    maxvalue> data ? maxvalue : data
))
console.log(ss)



  
}
maxMinValue()
