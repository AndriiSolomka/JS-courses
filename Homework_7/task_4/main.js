"use strict"


 function showInfo() {
 return `${this.level} ${this.position} заробляє ${this.salary}`; 
}


let employee = {
	salary: 2000,
	taxes: 200,
	position: "front-end developer",
	level: "middle",
    showInfo,
}


for(let key in employee){
    if(typeof employee[key] === 'number'){
        employee[key] *=2;
    }
}


console.log(employee.showInfo());


let employee2 = {
    salary: 2000,
    taxes: 0,
    position: 'KPI student',
    level: 'First year',
    showInfo,
}


console.log(employee2.showInfo());