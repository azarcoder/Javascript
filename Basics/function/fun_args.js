// function me()
// {
//     console.log(arguments[1])
//     console.log(arguments[0])
//     console.log(arguments[2])
//     console.log(arguments[3])
// }
// me(1,2,3,"azar")

function a()
{
    console.log(arguments[0])
    arguments[1]='azar'
    console.log(arguments[1])
}
a(1,'me')