function findMode(arr){

    let counts = {};
    let maxNum = 0;
    let mode;

    for(let element of arr){
        counts[element]=(counts[element] || 0)+1;
        
        if(3>maxNum){
            maxNum = counts[element];
            mode = maxNum
        }
    }
    return mode;

}

console.log(findMode([1,2,2,3,1,4,2]));
