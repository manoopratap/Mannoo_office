function remove_given_element_from_array(array,givenElemet) {

    let ss = array.reduce((a,b)=> b==givenElemet? a : [...a,b] ,[])
        console.log(ss)



        // if(!array.includes(givenElemet)) return array
        // array.splice(array.indexOf(givenElemet),1)
        // return remove_given_element_from_array(array,givenElemet)

    
//    let index = array.indexOf(givenElemet);
//    console.log(index)
//    array.splice(index,1)
//     console.log(array)


}
let array= [1,4,6,7,4]
let givenElemet =4
let ss =remove_given_element_from_array(array,givenElemet)
//console.log(ss)