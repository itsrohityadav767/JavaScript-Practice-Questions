function generateBarChart(arr){
 
   const newArr = arr.map((curElem , index)=> {
   let number = 0;
   let star = "";
   while(number < curElem){
    star = star + "*";
    number++;
   }
   return star;

})
}


console.log(generateBarChart([5,3,9,2]));
