// function a(){
//     return function b(x){return x*2}
// }
// var a=a()//[Function: b]
// var ans=a(6)//12
// console.log(a)

//one line
function a(){
    return function b(x){return x*2}
}
var ans=a()(10)
console.log(ans)