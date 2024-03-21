"use strict"


let employee1 = {
    fullName: 'Tkachenko Zenya',
    position: 'senior',
    salary: 3000,
};


let employee2 = {
    fullName: 'Andrii Solomka',
    position: 'student',
    salary: 2000,
}


function showInfo (currency = ''){
    console.log(`${this.fullName} на позиції ${this.position} заробляє ${this.salary} ${currency}`);
}

showInfo.apply(employee1, ['$']);
showInfo.apply(employee2, ['UAH']);


let showInfoOfEmployee1 = showInfo.bind(employee1) 
let showInfoOfEmployee2 = showInfo.bind(employee2)

showInfoOfEmployee1('$');
showInfoOfEmployee2('UAH');