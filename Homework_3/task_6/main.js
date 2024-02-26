"use strict"

const monthNum = +prompt('Введіть поточний номер місяця: ');


if(monthNum % 1 === 0){
    correctMonth(monthNum)
} else{
    console.log('Некоректний номер місяця')
}


function correctMonth (){

    const month = {
        winter: 1 <= monthNum && monthNum <= 2 || monthNum === 12,
        spring: 3 <= monthNum && monthNum <= 5,
        summer: 6 <= monthNum && monthNum <= 8,
        autumn: 9 <= monthNum && monthNum <= 11
    };
    
    if(month.winter){
        console.log('Зима');
    }else if(month.spring){
        console.log('Весна');
    } else if(month.summer){
        console.log('Літо');
    } else if(month.autumn){
        console.log('Осінь');
    } else{
        console.log('Некоректний номер місяця')
    }

}



