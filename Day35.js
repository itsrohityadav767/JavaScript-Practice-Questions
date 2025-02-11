function isEmptyObject(obj){
    return Object.keys(obj).length == 0? `it's empty` : `it's not empty`;
}


console.log(isEmptyObject({}))
console.log(isEmptyObject({name : "rohit"}))