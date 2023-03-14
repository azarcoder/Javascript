/*
Map
----
key,value pairs
key must be unique
*/
let m = new Map()
m.set('a',1)
m.set('b',2)
console.log(m)
for(let [k,v] of m)
{
    console.log(k,v)
}
m.forEach((v,k)=>{
    console.log(k,v)
})

//2d array to map
let arr2d = [['a',12],['b',13]]
let m2 = new Map(arr2d)
console.log(m2)