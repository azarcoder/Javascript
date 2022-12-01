const p=['I','Love','You','Babe']
let text=""
for(var i of p)
    text+=i+' '
console.log(text)
     

//string
let str='simbu'
for(var i of str)
    console.log(i)

//method - entries()

let col = ['green','pink','red','violetblue']

for (var[i,j] of col.entries())
    console.log(i,'-->',j)
    //op
// 0 --> green
// 1 --> pink
// 2 --> red
// 3 --> violetblue


//for an object
var me={
    name:"Azar",
    age:19,
    city:"Trichy",
    contact:123456789
}
for(var[i,j] of Object.entries(me))
    console.log(`${i}:${j}`)
