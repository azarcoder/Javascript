class Person
{
    static users = 0 //static variable
    constructor(n,a)
    {
        this.name = n
        this.age = a
        Person.users++
    }
    //static methods
    static demo() //object no need to create
    {
        console.log(`No of users:${Person.users}`)
    }
}
var a = new Person('azar',21)
var b = new Person('dfg',21)
var c = new Person('bhh',21)

console.log(Person.users)//should print with class name
Person.demo()