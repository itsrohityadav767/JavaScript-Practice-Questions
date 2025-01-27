
const generateHash=(str)=>{

    if(str.length>280 || str.trim().length == 0)
        return false;

    str = str.split(" ");
    
    str= str.map((curElem) =>

        curElem.charAt(0).toUpperCase() + curElem.slice(1))
    
        
    return str.join(" ");
}



console.log(generateHash("my name is rohit yadav"));