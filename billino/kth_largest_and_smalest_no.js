function kth_largest_and_smalest_no(params) {
   
   let sortedArray =  array.sort((a,b)=>a-b)
   let costantArray =sortedArray.reduce((a,b)=>a.includes(b)?a:[...a,b],[])
   let secondMinValue = costantArray[1]
   let secondMaxValue = costantArray[costantArray.length-2]

    console.log({secondMinValue,secondMaxValue})

}
let array= [1,3,3,15,11,5,7,8,8]
kth_largest_and_smalest_no()