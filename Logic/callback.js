function hi()
{
    console.log('hi')
}
function hello()
{
    console.log('hello')
}
function greet(callback)
{
    callback()
}

greet(hi)
greet(hello)