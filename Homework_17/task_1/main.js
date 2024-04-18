"use strict"


const leftClick = document.querySelector('button')
const rightClick = document.querySelector('button')
const dblClick = document.querySelector('button')


leftClick.addEventListener('click', (event) =>{
    console.log('Клік');
})


rightClick.addEventListener('contextmenu', (event) =>{
    console.log('Правий клік');
})


dblClick.addEventListener('dblclick', (event) =>{
    console.log('Подвійний клік');
})


document.addEventListener('keyup', (event)=>{
    //alert(event.key);
})


const changeText = document.querySelector('input')
const h1 = document.querySelector('h1')


changeText.addEventListener('keyup', (event)=>{
    h1.innerHTML = event.target.value;
})