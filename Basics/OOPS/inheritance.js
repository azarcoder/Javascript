class person {
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    greet()
    {
        console.log(`Welcome ${this.name}`)
    }
}

class me extends person{
    constructor(name,age,role)
    {
        super(name,age)
        this.role=role
    }
}
class last extends me 
{
    constructor(name,age,role)
    {
        super(name,age,role)
    }
}
class mth extends person 
{
    test(){
    super.greet()
    }
}

let m=new me('Azar',20,'Trainer')
console.log(m)
let p1=new person('Ameera',19)
console.log(p1)
p1.greet()
let l=new last('Hanifa',22,'Technician')
console.log(l)
let mt=new mth('Azar')
mt.test()
