function me(name,age){
    var name=name
    this.age=20
    this.getname=()=>{return name}
}
let a=new me('Azar',20)
console.log(a)
console.log(a.getname())