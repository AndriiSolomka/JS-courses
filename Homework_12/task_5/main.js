"use strict"


class Customer{

    constructor(name){
        this.name = name;
        this.shoppingCart = [];
        this.sum = 0;

    }

    addProduct(product){

        this.shoppingCart.push(product.title);
        this.sum += product.price;
    
    }


    removeProduct(productName){

        this.shoppingCart = this.shoppingCart.filter((item)=>{
            return !item.includes(productName.title)
        })

        this.sum -= productName.price

        
    }


    buy(){
        return (`${this.name} купила товар "${this.shoppingCart}" на суму ${this.sum} грн`);
    }

}


class Product{

    constructor(title, price){
        this.title = title;
        this.price = price;
    }

}


class DiscountProduct extends Product{

    constructor(title, price, discountPercent){
        super(title, price)
        this.discountPercent = discountPercent;
        this.price = this.calculateDiscountPrice();
    }


    calculateDiscountPrice(){
       return this.price - (this.price * (this.discountPercent / 100));
       
    }

}







const customer = new Customer('Зеновія');

const chocolate = new Product("Шоколадку", 125);
const coffee = new Product("Каву", 50);
const potatoes = new DiscountProduct("Картошку", 20, 15); 
const dumplings = new DiscountProduct("Пельмені", 100, 30); 


customer.addProduct(chocolate);
customer.addProduct(coffee);
customer.addProduct(potatoes);
customer.addProduct(dumplings);
customer.removeProduct(coffee);

console.log(customer.buy());



//ПРОВЕРКА, ЧТО ВСЕ РАБОТАЕТ
/* const customer = new Customer('Tom Holland');
const eggs = new Product("Яйця", 50);
const porridge = new Product("Гречка", 40);
const sausage = new DiscountProduct("Ковбаса", 120, 5); // 5% знижка
const dumplings = new DiscountProduct("Пельмені", 90, 10); // 10% знижка


customer.addProduct(eggs);
customer.addProduct(porridge);
customer.addProduct(sausage);
customer.addProduct(dumplings);
customer.removeProduct(porridge);

console.log(customer.buy());  */