function number(x){
    console.log(x);
    if(x<10){
        number(x+1)
    }
}
let data = 0
number(data)