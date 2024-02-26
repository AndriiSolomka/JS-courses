"use strict"


const message = prompt('Напишіть повідомлення');

if(message){
    console.log(message);
} else if(message === ""){
    console.log('Ви нічого не написали');
} else{
    console.log('Відміна вводу');
}
