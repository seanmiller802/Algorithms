// const bubbleSort = (arr) => {

//   // first loop starts from the end so that the number of comparisons shrinks each time through
//   for(let i=arr.length; i > 0; i--) {
//     for(let j=0; j < i -1; j++) {
//       if(arr[j] > arr[j+1]) {

//         // swap items
//         // let temp = arr[j];
//         // arr[j] = arr[j+1];
//         // arr[j+1] = temp;

//         // other option
//         [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//       }
//     }
//   }
//   console.log("Sorted array is:", arr);
//   return arr;

// }

// bubbleSort([1,5,3,78,12,79,0]);


// OPTION 2 - OPTIMIZED
const bubbleSort = (arr) => {

  let noSwaps;

  // first loop starts from the end so that the number of comparisons shrinks each time through
  for(let i=arr.length; i > 0; i--) {
    noSwaps = true;
    for(let j=0; j < i -1; j++) {
      if(arr[j] > arr[j+1]) {

        // swap items
        // let temp = arr[j];
        // arr[j] = arr[j+1];
        // arr[j+1] = temp;

        // other option
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
        noSwaps = false;
      }
    }

    if(noSwaps) break;
    
  }

  console.log("Sorted array is:", arr);
  return arr;

}

bubbleSort([8,1,2,3,4,5,6,7]);