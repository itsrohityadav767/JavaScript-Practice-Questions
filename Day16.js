
function findMin(arr){

    arr =  arr.sort((a,b)=>{
        if(a<b) return -1;
    })

    return arr[0];
}

console.log(findMin([5,10,2,6]));

console.log(findMin([5,-3,0,12,-7]));

console.log(findMin([]));