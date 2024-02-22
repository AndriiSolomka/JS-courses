let x = +prompt("Enter x:"); 
let y = +prompt("Enter y:"); 

x = y + x;
y = x - y;
x = x - y;


console.log(x);
console.log(y);