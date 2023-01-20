//set - collection of unique values

/*
Set Methods:
------------
new Set() - create new set
add()
delete()
has()
forEach()
values() -  return [object set iterator]
size
*/
const l = new Set(['azar',1,2])
console.log(l)
l.add(2)//won't add 
l.add('me')
console.log(l)
t=''
l.forEach(function(v){
    t+=v+" "
})
console.log(t)
l.values()//

l.delete("azar") //delete an element
console.log(l)
console.log(l.has(1))//true
console.log(l.size)//return size (3)

