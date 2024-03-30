"use strict"


const user  = {

    _name: '',
    _age: 0,

    get name() {
        return this._name;
    },

    set name(curName){
        if(curName.length > 2){
            this._name = curName;
        } else{
            console.log('name length < 2');
        }
    },

    get age() {
        return this._age;
    },

    set age(curAge){
        if(curAge > 0){
            this._age = curAge;
        } else{
            console.log('age < 0');
        }
    },



}

user.name = 'Andrii';
user.age = 18;

user.name = 'A';
user.age = -18;