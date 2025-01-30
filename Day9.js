
function calculateAverage(arr){
    let sum=0;
    let len = arr.length;
    for(let i=0;i<arr.length;i++){

    sum=sum+arr[i];

    }
    return sum/len;
}


console.log(calculateAverage([10,2,2]));