
function checkTriangleType(a,b,c){
    if(a=== b && b===c) return "Equilateral Triangle";

    else if(a===b || b===c || a===c ) return "Isosceles Triangle";

    return "Scalene Triangle";
}

console.log(checkTriangleType(3,3,3));
console.log(checkTriangleType(3,4,3));
console.log(checkTriangleType(5,8,6));