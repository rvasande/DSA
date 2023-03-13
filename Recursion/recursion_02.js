function print(x){
  if (x == 6) {
    return 1;
  }
  console.log(x);
  print(x + 1);
}
let x = 1;
// console.log(print(x));
print(x)