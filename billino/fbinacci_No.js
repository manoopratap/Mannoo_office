let result = [0,1] ;
function name() {
      let newValue = result[result.length-1]+result[result.length-2]
      if(newValue<20){
         result = [...result,newValue]
         name()
      }else {
         console.log(result)
      }
}
 name()
