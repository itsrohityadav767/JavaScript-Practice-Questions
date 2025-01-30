function isArrayEqual(arr1, arr2) {
  if (arr1.length != arr2.length) return false;

  return arr1.every((curElem, index) => curElem === arr2[index]);
}

console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));
console.log(isArrayEqual([1, 2, 3], [1, 2, 4]));
console.log(isArrayEqual([], []));
