const array = [
    { name: 'AA', dept: 'IT' },
    { name: 'BB', dept: 'HR' },
    { name: 'CC', dept: 'HR' },
    { name: 'DD', dept: 'Fin' },
    { name: 'EE', dept: 'IT' }
]

function name(objectArray, property) {
    let result = []
    for (let index = 0; index < objectArray.length; index++) {
        if (!result[objectArray[index].dept]) {
            result[objectArray[index].dept] = []
        }
        result[objectArray[index].dept].push(objectArray[index])
        console.log(result)
    }


    // return objectArray.reduce(function (acc, obj) {
    //   let key = obj[property]
    //   if (!acc[key]) {
    //     acc[key] = []

    //   }
    //   //console.log(acc[key])
    //   acc[key].push(obj)
    //   console.log(acc)
    //   return acc
    // }, [])

}

let ss = name(array, "dept")
 