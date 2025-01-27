function countChar(str1,character){

    let count = 0;

    str1 = str1.split("");
    for(let char of str1 ){
        if (char.toLowerCase() === character.toLowerCase()) {
            count++;
        }
    }
    return count;
}





console.log(countChar("MissIssippi","I"));