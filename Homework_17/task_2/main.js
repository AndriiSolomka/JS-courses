"use strict"

const value1 = document.querySelector('.value1')
const value2 = document.querySelector('.value2')
const result = document.querySelector('.result')
const plus = document.querySelector('button:nth-of-type(1)');
const minus = document.querySelector('button:nth-of-type(2)');
const multiply = document.querySelector('button:nth-of-type(3)');
const divide = document.querySelector('button:nth-of-type(4)');
const equals = document.querySelector('button:nth-of-type(5)');


const numbers = {
    num1: 0,
    num2: 0,
    res: 0,
}


value1.addEventListener('keyup', (event)=>{
    const inputValue = parseFloat(event.target.value)

     if(isNaN(inputValue)){
        value1.style.backgroundColor  = 'red'
    } else{ 
        value1.style.backgroundColor  = 'white'
        numbers.num1 = inputValue;
        console.log(numbers);
    }
    
})
 

value2.addEventListener('keyup', (event)=>{
    const inputValue = parseFloat(event.target.value)

    if(isNaN(inputValue)){
       value2.style.backgroundColor  = 'red'
   } else{ 
       value2.style.backgroundColor  = 'white'
       numbers.num2 = inputValue;
       console.log(numbers);
   }
})


plus.addEventListener('click', (event)=>{
    event.target.value = numbers.num1 + numbers.num2;
    numbers.res =  parseFloat(event.target.value)
})


minus.addEventListener('click', (event)=>{
    event.target.value = numbers.num1 - numbers.num2;
    numbers.res =  parseFloat(event.target.value)
})


multiply.addEventListener('click', (event)=>{
    event.target.value = numbers.num1 * numbers.num2;
    numbers.res =  parseFloat(event.target.value)
})


divide.addEventListener('click', (event)=>{
    event.target.value = numbers.num1 / numbers.num2;
    numbers.res =  parseFloat(event.target.value)
})


equals.addEventListener('click', () =>{
    
    if(value1.style.backgroundColor === 'red' || value2.style.backgroundColor === 'red'){
        setTimeout(()=>{
            alert("Введіть коректні числа!")
        }, 2000)

    } else{
        result.value = numbers.res
    }
    
})
