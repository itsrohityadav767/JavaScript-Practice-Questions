function isPalindrome(str){
    str=str.toLowerCase().replace(/\W/g, "");
    let original = str;
    str = str.split("").reverse().join("")

    if( original  == str)
        return true;

    else return false;
}



console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));