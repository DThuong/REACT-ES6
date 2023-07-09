function handle(cb){
    cb()
}
class Cat{
    constructor(name, color, type)
    {
        this.name = name
        this.color = color
        this.type = type
        // Sử dụng bind
        // this.feed = this.feed.bind(this)
    }
    feed = ()=>{
        console.log(`${this.name} eat beef`);
    }

    run(){
        handle(this.feed)
    }
}

// // thêm method (sử dụng prototype)
Cat.prototype.meow = function(){
    console.log(`${this.name}: meow meow meow`);
}
// // khởi tạo 1 instance object
let alex = new Cat('Alex', 'yellow', 'Bengal')
alex.meow()
alex.feed() // Alex eat beef
alex.run()
