const merge = (arr1, arr2) => {

  let arr = [];

  let i = 0;
  let j = 0;

  
  while(i < arr1.length && j < arr2.length) {

    if(arr2[j] > arr1[i]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
    
  }

  while(i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }

   while(j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }

  console.log("Sorted array is:", arr);
  return arr;
}

const mergeSort = (arr) => {

  
  const split = (arr) => {

    let splitArray = [];

    
    let midpoint = Math.floor(arr.length / 2);
    let arr1 = arr.slice(0, midpoint);
    let arr2 = arr.slice(midpoint);
    console.log(arr1)
    console.log(arr2);

    

  }

  const tester = split(arr);



  console.log("tester is:", tester)

}

mergeSort([1,10,50,2,14,99,100]);

// merge([1,10,50], [2,14,99,100]); // 1 2 10 14 50 99 100
