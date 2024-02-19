
//lvl 1 Task 1
let age = 18;
let myName = `Андрій`;
console.log(age, myName);


myName = `Соломка Андрій`;
console.log(myName);

//lvl 2 Task 2
alert('Мене звати ' +  myName + ' мені ' + age + ' років')


//lvl 2 Task 3
age = prompt('Скільки Вам повних років');
myName = prompt('Як Ваше ПІБ');
alert(`Мене звати ${myName}, мені ${age} років.`)


//lvl 2 Task 4
let number1, number2;
number1 = +prompt('Введіть перше число: ');
number2 = +prompt('Введіть друге число: ');
let sum = number1 + number2;
let sub = number1 - number2;
let mul = number1 * number2;
let div = number1 / number2;
let numVal = `${number1} i ${number2}`
console.log(` Сума ${numVal}: ${sum}\n Віднімання ${numVal}: ${sub}\n Множення ${numVal}: ${mul}\n Ділення ${numVal}: ${div}\n`);
