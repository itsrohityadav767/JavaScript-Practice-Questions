function isPowerofTwo(num) {
  if (num <= 0) return false;

  return (num & (num - 1)) === 0;
}

console.log(isPowerofTwo(8));
console.log(isPowerofTwo(10));
console.log(isPowerofTwo(16));
