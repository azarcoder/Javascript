var me={
    name:"Azar",
    age:19,
    city:"Trichy",
    contact:123456789
}

//console.log(me)

for(var i in me)
    console.log(me[i]) //print only values

//print key and vale
for(var i in me)
    console.log(i+':'+me[i]) //print only values
console.log('---------------')
//array 
var a=[1,2,'Azar']
for(var i in a)
    console.log(a[i])
