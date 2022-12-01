var a=[1,2,3,4,5,6,'hi','ji']
var b=[1,2,3,4,5,6,7,8,9,10]
//a.push('7')
//a.pop()
//a.shift()
//a.unshift('hola')

//let b=a.slice(0,-3) 2 args,copy purpose
//a.splice(4,1,'n5') 3 args,affect Og


//console.log(a.indexOf(5))
//console.log(a.length)
//console.log(a instanceof Array)//true
//console.log(Array.isArray(a))//true

//find
var c=b.find(item=> item % 2==0)
console.log(c) //2 this will give first one element which match with cond

//filter
var c=b.filter(item=> item % 2==0)
console.log(c)//2 4 6 8 10

//includes
console.log(b.includes(2))//true

//reverse
console.log(b.reverse())

//sort
let x=[12,34,76,89,23,'ji','a','']
console.log(x.sort())

//concat
var f=[1,2,3]
var g=[1,2,3]
var h=[9,0,8]
console.log(f.concat(g,h))

//every 
var f=[1,3,5,7,9]
var k=[1,2,3,4,5]
let op1=f.every(item=>item%2)
let op2=k.every(item=>item%2)
console.log(op1,op2)

//foreach
var k=[1,2,3,4,5,'kio',true]
k.forEach(item=>console.log(item))

//join()
let q=[1,2,true,'azar']
console.log(q.join())//by default ,comma
console.log(q.join('-'))

//map
let o=[1,2,3,4,5]
var k=o.map(item=>item*=2)
console.log(k)

//some()
var f=[1,3,5,7,9]
var k=[24]
var o1=f.some(item=>item%2)
var o2=k.some(item=>item%2)
console.log(o1,o2)

//reduce()
var t=[1,-2,3,4,5]
let lo=t.reduce((p,c)=>p+c)
console.log(lo)

//reduceRight() -->righ to left
var t=[1,-2,3,4,5]
let love=t.reduceRight((p,c)=>p+c)
console.log(love)
