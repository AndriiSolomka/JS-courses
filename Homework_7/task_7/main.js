"use strict"


let books = {
    countries: [
     {
      country: "Англія",
      authors: [
       {
        author: "Артур Конан Дойль",
        books: [
         {
          title: "Пригоди Шерлока Холмса",
          year: 1887,
          genre: "Роман"
         },
         {
          title: "Загадка Боскомського долу",
          year: 1912,
          genre: "Детектив"
         },
         {
          title: "Загадка Червоного Цирку",
          year: 1927,
          genre: "Детектив"
         }
        ]
       }
      ]
     },
     {
      country: "Україна",
      authors: [
       {
        author: "Макс Кідрук",
        books: [
         {
          title: "Твердиня",
          year: 2013,
          genre: "Роман"
         },
         {
          title: "Нові темні віки",
          year: 2023,
          genre: "Роман"
         }
        ]
       },
       {
        author: "Тарас Шевченко",
        books: [
         {
          title: "Кобзар",
          year: 1840,
          genre: "Роман"
         }
        ]
       }
      ]
     } 
    ]
   }











   
   let{countries:[{authors:[{books:[{title:firstBook},{},{title:thirdBook}]}]},{authors:[{books:[{},{title:secondKidrukBookName}]},{books: [{year: yearOfPublicationKobzar}]} ]}]} = books
   
   

   console.log(firstBook, thirdBook);
   console.log(secondKidrukBookName);
   console.log(yearOfPublicationKobzar);
   
   
   
   
   
   
   
   /* 
   
let { countries:[ {
       authors: [ {
           books:[{
               title: firstBook
            },{
                
            },{
                title: thirdBook
            }]
        }]
    }]
    
} = books


let{countries:[,{
    authors:[{
        books:[{
            
       },{
            title: secondBook
        }]
    }]
}
    
]} = books



console.log(firstBook, thirdBook);

let {countries: [, {authors: [, {books: [{year: yearOfPublicationKobzar}]}]}]}= books

console.log(yearOfPublicationKobzar); */

