function startWith(str, substr) {
    return str.toLowerCase().startsWith(substr.toLowerCase());
}

console.log(startWith("Hello world", "hello")); // true
console.log(startWith("Hello world", "world")); // false
