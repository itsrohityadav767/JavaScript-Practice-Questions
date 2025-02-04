const numbers= [1,2,2,3,1,4,2];

let count ={};

for(let element of numbers)
    count[element]= (count[element] || 0)+1;

console.log(count);