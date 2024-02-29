"use strict"

const message = prompt('Напишіть повідомлення');



switch (message) {
    case "": 
        alert('Ви нічого не написали');
        break;
    case null:
        alert('Відміна вводу');
        break;
    default:
        console.log(message);
    break;
}




/* const message = prompt('Напишіть повідомлення');

if(message){
    console.log(message);
} else if(message === ""){
    alert('Ви нічого не написали');
} else{
    alert('Відміна вводу');
} */