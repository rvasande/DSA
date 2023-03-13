let data = [11, 22, 43, 2, 56, 88, 54, 4];
let find = 22;
let pos = undefined;
for (let i = 0; i < data.length; i++) {
  if (data[i] === find) {
    pos = i;
    break;
  }
}
console.log(pos);
