let array = [11, 22, 33, 44, 55, 66, 77, 88, 99];
      let x = 44;
      let index = search(array, x, 0, array.length - 1);
      if (index) {
        console.log("found at index " + index);
      } else {
        console.log("not found");
      }

      function search(array, x, l, r) {
        while (l <= r) {
          let mid = Math.floor((l + r) / 2);
          if (x === array[mid]) {
            return mid;
          } else if (x < array[mid]) {
            r = mid - 1;
          } else {
            l = mid + 1;
          }
          
        }
      }