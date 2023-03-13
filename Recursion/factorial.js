function factorial(x){
    if(x == 0){
      return 1
    }
    let factN=factorial(x-1)
    let out = x*factN
    return out
   }
   let data = 5
   console.log(factorial(data));