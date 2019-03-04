// const selectionSort = (arr) => {

//   for(let i=0; i<arr.length - 1; i++) {
//     for(let j=i+1; j<arr.length; j++) {

//       console.log(arr[i], arr[j]);

//       let minimum = arr[i];
//       if(arr[j] < minimum) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }

//       console.log("Now array is", arr);

//     }
//   }

//   console.log("SORTED ARRAY IS", arr);
//   return arr;
// }



// selectionSort([2,5,1,7,4,11, 0, -7]) // 1, 2, 4, 5, 7, 11




const selectionSort = (arr) => {

  for(let i=0; i<arr.length - 1; i++) {
    
    let min = i

    for(let j=i+1; j<arr.length; j++) {

      if(arr[j] < arr[min]) {
         min = j;
      }

    }

    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;

  }

  console.log("Sorted array is:", arr);

  
}



selectionSort([2,5,1,7,4,11, 0, -7]) // 1, 2, 4, 5, 7, 11