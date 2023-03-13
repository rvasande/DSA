
  let arr = [1, 3, 5, 7, 8, 9];
  let x = 5;
  var index = binarySearch(arr, x, 0, arr.length - 1);
  if (index) {
    console.log("element found at index " + index);
  } else {
    console.log("element not found");
  }

  function binarySearch(arr, x, l, r) {
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (x === arr[mid]) {
        return mid;
      } else if (x < arr[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
      return false;
    }
  }