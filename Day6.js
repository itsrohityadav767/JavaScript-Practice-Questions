function isPalindrome(str){
    let original = str;
    str = str.split("");
    str = str.reverse();
    str = str.join("");

    if( original  == str)
        return true;

    else return false;
}



console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));