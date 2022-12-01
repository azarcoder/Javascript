var a="Azarudeen"
var b="Techie"
var c="Java is super"
var d='               azar'
console.log(a.charAt(1))//find character
console.log(a.concat(b))
console.log(a.concat(' A')) //concatenate

console.log(a.indexOf('e')) //first occurence 
console.log(a.lastIndexOf('e')) //last occurence

console.log(a.toLowerCase())//lowercase
console.log(a.toUpperCase())//uppercase

console.log(c.split(' ')) //split 
console.log(c.split(' ',2)) 

console.log(d.trim())//trim()-remove extra spaces

//toString()-->return a string object into string
var ans=new String('Hello hola')
console.log(ans)
console.log(ans.toString)

//substring()
var x='AZAR'
console.log(x.slice(0,2))//start position and ending position
console.log(x.slice(-2)) //accept neg values

//length
var l='AZARUDEEN A'
console.log(l.length)

console.log(l.endsWith('A')) //check if ends with what? return boolean(case-sensitive)
console.log(l.startsWith('A'))

var se='hi ji bi ki oi'
console.log(se.search('mi')) //if not found it will return -1
//otherwise send the position

