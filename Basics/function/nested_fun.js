// function a()
// {
//     var a=1
//     function b()
//     {
//         var b=2
//         function c()
//         {
//             var c=3
//             console.log(a)
//             console.log(b)
//             console.log(c)
//         }
//         c()
//     }
//     b()
// }
// a()

//exmple 2
// function intro()
// {
//     intro='hello!'
//     return function(){
//         console.log(`${intro}world`)
//     }
// }
// intro()()

function a()
{
    let car='BMW'
    console.log(car)
    function b()
    {
        let bike='BMW 1000R'
        console.log(bike)
        function c()
        {
            let cat='Meow'
            console.log(cat)
        }
        return c()
    }
    return b()
}
a()