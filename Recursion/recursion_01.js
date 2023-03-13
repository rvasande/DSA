function print(x){
    if(x == 0){
     return 1
    }
    console.log(x);
    print(x-1)
   }
   let x = 5
   console.log(print(x));