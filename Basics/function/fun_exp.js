// const a=function(a,b){
//     return a+b
// }
// console.log(a())//NaN
// console.log(a(100,100))//200

//function as function arguement
// const a=function(){
//     console.log('hey!')
// }

// function b(a)
// {
//     console.log('Hola')
//     a()
// }
// console.log(b(a))//pass by value

//function default parameter values
function add(a=0,b=0){
    return a+b
}
console.log(add(5,5))
console.log(add())

//no default parameter values
function add(a,b){
    return a+b
}
console.log(add(5,5))
console.log(add())