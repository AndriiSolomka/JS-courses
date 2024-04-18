"use strict"


const createButton = document.querySelector('.inputColor');
const addButton = document.querySelector('button');


const colorValue = {
    color: [],
}


createButton.addEventListener('keyup', (event) => {
    colorValue.color.push(event.target.value);
    checkColor(colorValue)
});


addButton.addEventListener('click', () => {
    const lastColor = colorValue.color.at(-1);

    if(checkColor(lastColor)){

        const newButton = document.createElement("button");
        newButton.innerText = lastColor;
        
        changeColor(newButton, lastColor);
        document.body.appendChild(newButton);

    } else {
        console.error('Введіть коректний коліп перед додаванням!');
    }
   
}); 


// Нашел такой способ проверки на допустимы цвет CSS в интернете
function checkColor (colorName){ 
  
   let div = document.createElement("div");
   div.style.color = "transparent";
   div.style.color = colorName;

   

   return div.style.color !== "transparent";
}

function changeColor(button, color) {

    button.addEventListener('click', () => {
        document.body.style.backgroundColor = color;
    });
}  

