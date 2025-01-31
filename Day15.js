function sumofSquares(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i] * num[i];
  }
  return sum;
}

console.log(sumofSquares([1, 2, 3,4]));
