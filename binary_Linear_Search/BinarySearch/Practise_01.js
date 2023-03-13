function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.lenght - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === array[midIndex]) {
      return midIndex;
    }if(target < array[midIndex]){
       rightIndex = midIndex -1
    }else{
      leftIndex = midIndex + 1
    }
  }
  return -1
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));