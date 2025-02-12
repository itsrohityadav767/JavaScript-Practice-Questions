function calculateDayBetweenDates(d1,d2){
     
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    
    let diff = date1 - date2;
    return diff;


}

console.log(calculateDayBetweenDates("2024-01-01", "2024-01-31"));