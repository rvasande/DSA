let data = [11, 22, 33, 44, 55, 66, 77, 88];
let find = 33;
let pos = undefined;
for (let i = 0; i < data.length; i++) {
  if (data[i] === find) {
    pos = i;
    break;
  }
}
console.log(pos);