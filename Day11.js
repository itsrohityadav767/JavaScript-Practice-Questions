
function sumofdigit(num){
let arr = Array.from(String(num),Number);

return arr.reduce((accum, curElem)=> accum+=curElem , 0)
}

console.log(sumofdigit(1234));
console.log(sumofdigit(4321));
console.log(sumofdigit(123456789));