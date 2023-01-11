//toString
var a=[1,true,"azar"]

//to string
t=a.toString()

//join
j= a.join("*")
//console.log(j)//1*true*azar

//pop() remove last element
//push() add new element in last
//shift() remove first element
//unshift add new element in first

//length
// console.log(a.length)

delete a[0] //leaves undefined holes in the array
console.log(a)//[ <1 empty item>, true, 'azar' ]

var b=[1,5,3]

//concat - only return new array
var c =a.concat(b)
console.log(c)

//splice -- add new element in an array
/*
syntax
slice(add_position,delete count,string)
*/
c = ['a','b','c']
c.splice(3,0,'d')
console.log(c)
c.splice(0,2,"ab","ac")
console.log(c)

//slice --creates an new array
u = ['a','b','c']
u=u.slice(0,1)
console.log(u)//a

//sort
s=[12,'a',45,'b','c',1]
s.sort();//first sort numbers then alphabets
console.log(s)

//reverse
console.log(s.reverse())

//numberic sort
const so=[12,3,11,4,56,3,90,34,22]
so.sort(function(a, b){return a-b})//asending
console.log(so)

const de=[12,3,11,4,56,3,90,34,22]
de.sort(function(a, b){return b-a})//desending
console.log(de)

console.log("lowest:"+so[0]+" "+"Highest:"+so[so.length-1])

//sorting whole array is inefficient method so we can use math 

var k =[124,332,454,56653,2523,2455,90]
function ss(arr)
{
    return Math.max.apply(null,arr);//Math.max.apply equals to Math.max(124,332,454) like that
}
function mm(arr)
{
    return Math.min.apply(null,arr);//Math.min.apply equals to Math.min(124,332,454) like that
}
console.log("Biggest is:"+ss(k))
console.log("Smalest is:"+mm(k))



