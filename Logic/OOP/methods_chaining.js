class A{
    fun1()
    {
        console.log("we will call you soon")
    }
    func2(){
        console.log("Thank you for your support!")
        return this //must declare for return this obj when use chaining
    }
}
let a = new A()
a.func2().fun1() //method chaining