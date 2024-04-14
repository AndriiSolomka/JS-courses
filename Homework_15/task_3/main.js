"use strict"

class Timer {
    constructor() {
        this.second = 0;
        this.counter = null;
    }

    start() {
        this.counter = setInterval(() => {
            this.second++;
            console.log(this.second);
        }, 1000);
    }

    stop() {
        clearInterval(this.counter);
        this.second = 0;
    }

    pause() {
        clearInterval(this.counter);
    }

    show() {
        console.log(this.second);
    }
}


let newTimer = new Timer();
newTimer.start(); 

setTimeout(() => {
 newTimer.pause();
}, 5000);


setTimeout(() => {
 newTimer.start();
}, 7000);


setTimeout(() => {
 newTimer.stop();
 newTimer.show();
}, 9000);





