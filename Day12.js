function removeDuplicates(arr){

    let uniqueArr = [];

    for(let i = 0;i<arr.length;i++){
        if(!uniqueArr.includes(arr[i]))
            uniqueArr.push(arr[i]);
    }
    return uniqueArr;
}



console.log(removeDuplicates([1,2,3,2,1,4]))
console.log(removeDuplicates([5,6,7,7,8,8,9]))
console.log(removeDuplicates([]))