class Az
{
    constructor(n,a)
    {
        this.name = n
        this.age = a
    }
    demo()
    {
        console.log(`Welcome ${this.name}`)
    }
}
class B extends Az{
    constructor(n,a,c)
    {
        super(n,a) //call base class constructor
        this.city = c
    }
    demo()
    {
        console.log(`${this.name} from ${this.city}`)
        super.demo()//override
    }

}
let a = new Az('Azar',21)
a.demo()
let b = new B('node',90,'trichy')
b.demo()