const quickSort = (arr, left=0, right=arr.length - 1) => {

  if(left < right) {

    let pivotIdx = pivot(arr, left, right);

    //left
    quickSort(arr, left, pivotIdx - 1);

    //right
    quickSort(arr, pivotIdx + 1, right);

  }

  console.log("Sorted array is:", arr);
  return arr;
}

// pivot helper 
const pivot = (arr, start = 0, end = arr.length - 1) => {

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

quickSort([4,6,9,1,2,5,3]) //