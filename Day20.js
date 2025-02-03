function reverseString(str){
    let strreverse="";
    for(let i=str.length-1; i>=0;i--){
        strreverse = strreverse+str[i];
    }
    return strreverse;
}
console.log(reverseString("hello"));