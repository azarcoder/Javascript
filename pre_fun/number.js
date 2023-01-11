//exponential
var x=12e3,y=12e-3
// console.log(x,y)

//parseInt - convert string into a whole  int
//if not a number then return NaN
let h = "12000"
let d =parseInt(h)

//parseFloat - convert string into a Float
let v = "12000.890"
let s =parseFloat(v)
console.log(s)

//toFixed - Formats a number after with x number of digits after the decimal point
let t= 123.656
console.log(t.toFixed())//124
console.log(t.toFixed(2))//123.66

//toLocaleString - convert a number into a string based on Locale setting
var l =12000
console.log(l.toLocaleString())//12,000

//toPrecision - Formats a number to x length
var p = 123.34000
console.log(p.toPrecision(2))//1.2e+2

//toString - Convert a number to a string
var p = 123.34000
console.log(p.toString())//123.34