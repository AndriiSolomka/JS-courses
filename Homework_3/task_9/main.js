"use strict"


const password = 'TheMaster'
const admin = 'Admin';

const adminHome = prompt('Who\'s there?')
let adminPassword;

if(adminHome === null){
    alert('Canceled');
}else if(adminHome!= admin){
    alert('I don\'t know you');
} else if(adminHome === admin){
    adminPassword = prompt('Password?');
    if(adminPassword === null ){
        alert('Canceled');
    } else if(adminPassword === password){
        alert('Welcome!');
    } else{
        alert('Wrong password');
    }
} 