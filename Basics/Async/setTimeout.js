function greet(){
    console.log('Azar')
}setTimeout(greet,5000)//print after 5sec 
//setTimeout is an asynchoronous function

//setInterval
function hello(){
    console.log('T4TEQ')
}
let time=setInterval(hello,1000)//it will print after one sec each in infinite
setTimeout(function(){clearInterval(time)},3000) //after 3s it will be stop

