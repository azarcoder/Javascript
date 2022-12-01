// //syntax
// function demo(){
//     //code
// }
// demo() //call

// //parameter,arg
// function add(a,b){//parameters
//     console.log(a+b) //definition
// }
// add(5,5)//arg

// function greet()
// {
//     console.log('hi bro')
// }
// greet()


//func expression
var add = function(a,b){ //anonymous func because no name
    console.log(a+b)
}
add(5,9)

//another method
var sub = function(a,b){
    return a-b
}
let r = sub(6,5)
console.log(r)