"use strict"

let shoppingCart = {
    items: [],
    addItem,
    removeItem,
    calculateTotalPrice, 
    totalSum: '',
}


function addItem(title, price){
    this.items.push({ title: title, price: price })
    return this;
}

function removeItem(remove){
    this.items = this.items.filter(item => item.title !== remove);
    return this;
}

function calculateTotalPrice() {
    let totalPrice = 0;
    this.items.forEach(item => {
        totalPrice += item.price;
    });
    return totalPrice;
}


shoppingCart.addItem("iPhone", 1500)
            .addItem("Книга", 30)
            .addItem("Чашка", 5)
            .removeItem("Чашка"); 




shoppingCart.calculateTotalPrice()



console.log(shoppingCart);
