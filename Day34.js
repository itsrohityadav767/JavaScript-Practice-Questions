function removeDuplicates(arr){
    return Array.from(new Set(arr)); 

}

console.log(removeDuplicates([1,2,3,4,4,5]))
console.log(removeDuplicates([1,2,3,3,4,4,5]))
console.log(removeDuplicates(["a","a"]))