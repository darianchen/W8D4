class Clock{
    constructor(){
        const date = new Date();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.second = date.getSeconds();
        setInterval(this._tick.bind(this),1000)
        this.printTime()
        
    }
    printTime(){
        console.log(`${this.hour}:${this.minute}:${this.second}`);
    }

    _tick(){
        this.second += 1;
        this.printTime();
    }
}

// const clock = new Clock();
// console.log(clock)
