function calculateMean (arr){
    if(arr.length === 0) return 0;
    // let avge=0;
    let sum=0;
    for(let i=0; i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

console.log(calculateMean([1,2,3,4,5]));
console.log(calculateMean([10,20,30]));