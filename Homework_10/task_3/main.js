"use strict"


let shoppingCart = {
    items: [],
    addItem,
    removeItem,
    calculateTotalPrice, 
    totalSum: '',
}


function addItem(title, price){
    this.items.push({ title: title, price: price });
}

function removeItem(remove){
    this.items = this.items.filter(item => item.title !== remove);
}

function calculateTotalPrice() {
    let totalPrice = 0;
    this.items.forEach(item => {
        totalPrice += item.price;
    });
    return totalPrice;
}


shoppingCart.addItem("iPhone", 1500);
shoppingCart.addItem("Книга", 30);
shoppingCart.addItem("Чашка", 5);

shoppingCart.removeItem("Чашка"); 
shoppingCart.calculateTotalPrice()


function showSum(){
    this.totalSum = calculateTotalPrice.call(this)
}
showSum.apply(shoppingCart) // я решил сделать это ради эксперемента, чтобы просто не делать console.log((calculateTotalPrice()))


console.log(shoppingCart);
