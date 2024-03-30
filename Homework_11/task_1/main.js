"use strict"


const guest = {

    name: 'John',
    isRegistered: false,
}


const user = {

    isRegistered: true,
    isAdmin: false,
    email: "email@mail.com",

    __proto__: guest
}


const admin = {

    isAdmin: true,
    addProduct(product){
        console.log(`Я адмін, додаю новий продукт - ${product}`);
    },

    __proto__: user

}


admin.addProduct(' USA M4A4')

for (const key in admin) {
    if (Object.hasOwnProperty.call(admin, key)) {
        const element = key;
        console.log(element);
        
    }
}

