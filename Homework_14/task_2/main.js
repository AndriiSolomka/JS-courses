"use strict"


const sales = {
    name: "Jorge Clunie",
    profit: 10000,
    clients: [
     {
      name: "Harrison ford",
      profit: 5000,
      clients: [
       {
        name: "Mila Kunis",
        profit: 1000,
        clients: [
         {
          name: "Julia Roberts",
          profit: 2000,
          clients: [{ name: "Richard Gir", profit: 3000, clients: [] }],
         },
        ],
       },
      ],
     },
     {
      name: "Barak Obama",
      profit: 7000,
      clients: [{ name: "Hilari Klinton", profit: 5000, clients: [] }],
     },
     {
      name: "Frodo",
      profit: 3000,
      clients: [
       { name: "Bilbo", profit: 2000, clients: [] },
       {
        name: "Legolas",
        profit: 3000,
        clients: [{ name: "Galadriel", profit: 1000, clients: [] }],
       },
      ],
     },
    ],
};



const calcProfit = (sales) =>{
    let sum = sales.profit
    
    for (const client of sales.clients) {
        sum += calcProfit(client);
        }
    
    return sum
}

let result = calcProfit(sales);
console.log(result);