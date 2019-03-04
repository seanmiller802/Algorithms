// BINARY SEARCH

function binarySearch(arr, val) {

  let left = 0;
  let right = arr.length - 1;
 
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === val) return middle;
    if (arr[middle] < val) left = middle + 1;
    if (arr[middle] > val) right = middle - 1;
  }
 
  return -1;

}