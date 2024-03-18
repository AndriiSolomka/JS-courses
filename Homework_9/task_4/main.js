"use strict";

const books = {
    fantastic: {
        "Френк Герберт": [
            {
                title: "Дюна",
                year: 1965,
            },
            {
                title: "Дюна. Месія месіїв",
                year: 1969,
            },
            {
                title: "Діти Дюни",
                year: 1976,
            },
        ],
        "Станіслав Лем": [
            {
                title: "Соляріс",
                year: 1961,
            },
            {
                title: "Соляріс. Зіркові щоденники Ійона Тихого",
                year: 1971,
            },
        ],
    },
    novel: {
        Ремарк: [
            {
                title: "Три товарища",
                year: 1936,
            },
            {
                title: "Триумфальна арка",
                year: 1942,
            },
        ],
        "Джордж Оруелл": [
            {
                title: "1984",
                year: 1949,
            },
            {
                title: "Ферма Господаря Вилки",
                year: 1945,
            },
        ],
    },
    fantasy: {
        "Володар перснів": [
            {
                title: "Братство Кільця",
                year: 1954,
            },
            {
                title: "Дві вежі",
                year: 1954,
            },
            {
                title: "Повернення короля",
                year: 1955,
            },
        ],
        "Гаррі Поттер": [
            {
                title: "Гаррі Поттер і Філософський камінь",
                year: 1997,
            },
            {
                title: "Гаррі Поттер і тайна кімната",
                year: 1998,
            },
        ],
    },
};

books[Symbol.iterator] = function (){

    let arr = []
    for (const booksKey in this) {
     arr.push(this[booksKey])
    }

    let booksArray = [];
    arr.forEach(item => {
        for (const itemKey in item) {
            booksArray.push(item[itemKey]);
    }
    });

    let bookTitle = [];
    let i = 0;


    for (const booksArrayKey in booksArray) {
        booksArray[booksArrayKey].forEach(item =>{
            bookTitle.push(item.title)
        })
    }

    return{
        next(){
            if(i < bookTitle.length){
                return {value: bookTitle[i++], done: false}
            }
            return {done: true}
        }
    }
}

for (const iterator of books) {
    console.log(iterator)
}



