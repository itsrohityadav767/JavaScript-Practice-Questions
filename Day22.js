function findMedian(arr){
    arr.sort((a,b)=> a-b);
    console.log(arr);
    
    let length =  arr.length;
    let mid =Math.floor(length/2);

    if (length % 2 == 0){
        return (arr[mid]+arr[mid-1])/2;
    }
    else {
        return arr[mid];
    }

}

console.log(findMedian([5,3,9,1,7]))
console.log(findMedian([2,4,6,8]))
console.log(findMedian([1,3,5,7,9,11]))