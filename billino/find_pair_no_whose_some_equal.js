let Data= [1,3,4,2,7]
let newData=[]

function findPairNoWhoseSomeEquals(params) {
    for (let i = 0; i < Data.length; i++) {
        for (let j = i; j < Data.length; j++) {
            if (Data[i]+Data[j] == 5) {
               console.log(Data[i],Data[j])
            }
        }
    }
}
findPairNoWhoseSomeEquals()