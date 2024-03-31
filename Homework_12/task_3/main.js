"use strict"


class TodoList {
    constructor(todos){
        this.todos = [];
    }

    #show(){
        console.clear() // Я нашел этот метод, чтобы постонно очищалась консоль и не накладывался список друг на друга, а уже показывал финальный результат
        this.todos.forEach((item, index) =>{
        console.log(`${index + 1}. ${item}`);
       }) 
    }

    addTask(task){
        this.todos.push(task);
        this.#show();
    }

    removeTask(task){
        this.todos = this.todos.filter((item)=>{
            return !item.includes(task)
        })
        this.#show()
    }


}


const todoList = new TodoList(); 

 let add1 = todoList.addTask("Погуляти з собакою");
 todoList.addTask("Зробити ДЗ по JavaScript");
 todoList.addTask("Подивитись серіал");
 todoList.removeTask("Погуляти з собакою");

