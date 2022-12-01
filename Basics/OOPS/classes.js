class person{
    constructor(name,age)
    {
        this.name=name,
        this.age=age
    }
    welcome()
    {
        console.log(`welcome! ${this.name}`)
    }
}

let a = new person('Azar',20)
let b = new person('T4teq',20)
console.log(a,b)
a.welcome()
b.welcome()
