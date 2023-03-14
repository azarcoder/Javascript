function fun1(x)
{
    return function fun2(y)
    {
        return x+y
    }
}
let add = fun1(5)
console.log(add(10))