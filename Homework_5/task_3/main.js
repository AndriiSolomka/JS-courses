"use strict"


 let calcSumOrConcatination = (value1 = 15, value2 = 15) => {

    if(typeof(value1) === "string" || typeof(value2) === "string"){
        alert(`Результат конкатенації: ${value1 + value2}`);
       
    } else if(typeof(value1) === "number" && typeof(value2) === "number"){
        alert(`Результат суми: ${value1 + value2}`)

    } else alert(`Некоректні аргументи`);

} 





//calcSumOrConcatination(null, 1);
//calcSumOrConcatination(3,2);
//calcSumOrConcatination('3', 2);
//calcSumOrConcatination(2,'3');
//calcSumOrConcatination('KPI', '_Andrey')
//calcSumOrConcatination(true, 1);




