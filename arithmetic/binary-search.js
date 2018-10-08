function isMatch(n) {
  return n > 11;
}

function search(arr, isMatch) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  if(isMatch(arr[mid])) {
    return arr[mid];
  }
  console.log(start, end, mid, arr)
  if(arr.length <= 1) return;
    return search(arr.slice(0, mid), isMatch) || search(arr.slice(mid + 1), isMatch);
}

console.log(search([1, 3, 4, 6, 9, 5, 7, 12], isMatch));