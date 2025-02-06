function truncateString(str, count){

    if(str.length > count) return str.slice(0, count).concat("...");

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));