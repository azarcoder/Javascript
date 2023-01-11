/****************
 * String are immutable
 * cannot be changed only replaced
 *****************/


//length
let t="abcd"
console.log(t.length)

//slice - slice(start,end) negative index accepted
let j = "apple orange kiwi mango"
console.log(j.slice(2,5))
console.log(j.substring(2,5)) //same as slice

//replace - replace(old,new)
let z = "mango tree is very big tree"
let n = z.replace("tree","juice") //only change first occurence
let all = z.replaceAll("tree","juice") //not work in IE browser
console.log(z)
console.log(n)
console.log(all)

//upper,lower
let up ="abcD"
let lw="ABcd"
console.log(up.toLowerCase())
console.log(up.toUpperCase())

//concat
var cc =up.concat(" ",lw);
console.log(cc)

//trim
var tr = "       wow"
console.log(tr.trim())

//pad
let p = 5
let x =p.toString() //it's number so convert into string then process otherwise error
console.log(x.padStart(4,"x"))//xxx5

//charAt() - return the character at a specific index
var ch = "amaxing"
console.log(ch.charAt(0))

//return ASCII Value
console.log(ch.charCodeAt(0)) 

//split() - convert into array
var sp = "hello azar bro, it's split"
console.log(sp.split(''))//split char by char
console.log(sp.split(' '))//split by space
console.log(sp.split(','))//split by comma