/**
 * @function binarySearch
 * @param {Number[]} arr
 * @param {Number} n
 * @return {Number}
 */

function binarySearch(arr, n) {
  let min = 0;
  let max = arr.length - 1;
  let mid;
  while (min <= max) {
    mid = (min + max) >>> 1;
    if (arr[mid] === n) {
      return mid;
    } else if (arr[mid] < n) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return -1;
}

module.exports = binarySearch;
