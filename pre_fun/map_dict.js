//Map holds key value pairs where the keys can be and datatype
//A Map remembers the original insertion order of the keys

/*
Map Methods:
------------
new Mat() - create new Map
set() - sets the value for a key in a map
get() - Gets the value for a key in a map
delete()
has()
forEach()
values() -  return [object set iterator]
size
entries() - Returns an iterator with the [key,value] pairs in a Map
*/

const p = new Map([
    ["Azar",19],
    ['bilal',21],
    ['faizal',24],
    ['suban',35]
])
console.log(p)
//set used to modify existing map values
p.set("Azar",21)//Map(4) { 'Azar' => 21, 'bilal' => 21, 'faizal' => 24, 'suban' => 35 }
console.log(p)
console.log(p.get("Azar"))//get value of Azar op:21
console.log(p.size)//4
p.delete("bilal")
console.log(p)
console.log(p.has("bilal"))

p.forEach(function(k,v){
    console.log(k+'=>'+v)
})
/*
op:
21=>Azar
24=>faizal
35=>suban
*/
//entries - returns an iterator object with [key,value] pair
for(var i of p.entries()){
    console.log(i)
}
/*
op:
[ 'Azar', 21 ]
[ 'faizal', 24 ]
[ 'suban', 35 ]
*/