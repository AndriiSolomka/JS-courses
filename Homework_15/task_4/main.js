const customers = {
    "Katy Perry": [
        { name: "Borsh", time: 5000 },
        { name: "vareniki", time: 1000 },
        { name: "uzvar", time: 500 },
    ],
    "Cristiano Ronaldo": [
        { name: "Soup", time: 7000 },
        { name: "porridge", time: 1000 },
        { name: "water", time: 100 },
    ],
    "Jason Statham": [
        { name: "fried potatoes", time: 6000 },
        { name: "steak", time: 10000 },
        { name: "juice", time: 100 },
    ],
};

function cook(customers) {
    
    for (const customer in customers) {
        let order = customers[customer];
        let totalCookTime = 0;


        let maxTime = []
        order.forEach(item => {
            maxTime.push(item.time)
            totalCookTime = [Math.max(...maxTime)]
        });


        setTimeout(() => {
            let dishes = order.map(item => item.name).join(',');
            console.log(`Шановний відвідувач, ${customer}, ваше замовлення готове: ${dishes}. Смачного!`);
        }, totalCookTime);
    }

}


cook(customers);


