//Map - Key value pairs
//let mapNameHere = new Map([iterableHere]);
//Note: The Time Complexity for insertion, searching and deletion of entries or elements in Map and Set in JavaScript is O(log(n)).

//set
n.set("name","azar")
n.set("age",21)
console.log(n)

//get
console.log(n.get('name'))

//keys,values,entries
console.log(n.keys())//[Map Iterator] { 'name', 'age' }
console.log(n.values())//[Map Iterator] { 'azar', 21 }
console.log(n.entries())//[Map Entries] { [ 'name', 'azar' ], [ 'age', 21 ] }

//Iterating using the forEach() method
n.forEach((k,v,m)=>{
    console.log("key:"+k)
    console.log("value:"+v)
    console.log("map:"+m)
})

//iterating using for of 
for(i of n){
    console.log(i)
}
//[ 'name', 'azar' ]
//[ 'age', 21 ]

//key only
for(i of n.keys())
  console.log(i)

//value only
for(i of n.keys())
  console.log(i)

//key value 
for([k,v] of n)
  console.log(k+"-->"+v)
