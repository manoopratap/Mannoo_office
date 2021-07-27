let Data = [0, 0, 1, 1, 1, 0, 0, 1, 1, 0]

function FilterArray() {
    var done = false;
    while (!done) {
        done = true
        for (let index = 0; index < Data.length; index++) {
            if (Data[index - 1] > Data[index]) {
                done = false
                var temp = Data[index - 1];
                Data[index - 1] = Data[index];
                Data[index] = temp
            }
        }
    }
    console.log(Data)


}

FilterArray()