// function person (name,age){
//     this.name=name
//     this.age=age
// }

// person.prototype.getname=function(){
//     console.log(`I am ${this.name} and am ${this.age} years old`)
// }

// let p1=new person("Azar",20)
// let p2=new person("T4TEQ",22)
// console.log(p1.getname())

//calc
function calc(a,b)
{
    this.a=a 
    this.b=b
}
calc.prototype.add=function(){
    return(`${this.a+this.b}`)
}
calc.prototype.sub=function(){
    return(`${this.a-this.b}`)
}
calc.prototype.mul=function(){
    return(`${this.a*this.b}`)
}
calc.prototype.div=function(){
    return(`${this.a/this.b}`)
}
let l1=new calc(3,3)
console.log(l1.add())
console.log(l1.sub())
console.log(l1.mul())
console.log(l1.div())

