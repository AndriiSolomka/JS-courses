"use strict"


function Triangle(a, b, c){

    this.a = a;
    this.b = b;
    this.c = c;

}


Triangle.prototype.getSquare = function(a, b, c){
    const p = (this.a + this.b + this.c)/2;
    console.log(+(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(2)))
}   

const triangle1 = new Triangle(5, 4, 3);
const triangle2 = new Triangle(5, 5, 2);
const triangle3 = new Triangle(4, 4, 4);


triangle1.getSquare(); // 6
triangle2.getSquare(); // 4.89
triangle3.getSquare(); // 6.92