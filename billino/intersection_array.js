let array1= [1,2,4,9]
let array2 = [2,3,9,7]
let intersectionData =[]

function intersection(params) {
    for (let index1 = 0; index1 < array1.length; index1++) {
        
        for (let index2 = 0; index2 < array2.length; index2++) {
            if (array1[index1] == array2[index2]) {
                intersectionData.push(array1[index1])
            }
        }
    }
    console.log(intersectionData)
}

intersection()