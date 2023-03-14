function User(n,a)
{
    this.name = n
    this.age = a
    // this.login = function(){
    //     console.log('you are looged in')
    // }
}
//this is used to before ES6 
//simply used to create method inside prototype object
User.prototype.login = function()
{
    console.log(`Hi ${this.name}, You're logged In`)
}
let x = new User('Azar',21)
x.login()
