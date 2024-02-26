"use strict"


const message = prompt('Напишіть повідомлення');

if(message){
    console.log(message);
} else if(message === ""){
    alert('Ви нічого не написали');
} else{
    alert('Відміна вводу');
}
