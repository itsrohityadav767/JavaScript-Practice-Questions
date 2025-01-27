// Return largest word.


function findLongestWord(str){
    if(str.trim().length==0)
        return false;


    words = str.split(" ");
    words = words.sort((a,b)=> a.length-b.length);
    // console.log(words);
    return words.at(-1);

}



console.log(findLongestWord("This Question is to find the longest word"));