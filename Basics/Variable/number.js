var a=new Number('234') //object
console.log(a)

let x=0b101 //bin
console.log(x) //5

let y=0xABC //hex
console.log(y)

let z=0o15//oct
console.log(z)

let e=134e+3//notation
console.log(e)


//static methods
console.log("EPSILON-->"+Number.EPSILON)
console.log("MIN_VALUE-->"+Number.MIN_VALUE)
console.log("MAX_VALUE-->"+Number.MAX_VALUE)
console.log("MAX_SAFE_INTEGER-->"+Number.MAX_SAFE_INTEGER)
console.log("NaN-->"+Number.NaN)
console.log("POSITIVE_INFINITY-->"+Number.POSITIVE_INFINITY)
console.log("NEGATIVE_INFINITY-->"+Number.NEGATIVE_INFINITY)
console.log("prototype-->"+Number.prototype)


//methods

var j=NaN
var l=10
var k=06
var big=BigInt(10)
console.log(Number.isNaN(j))
console.log(Number.isInteger(l))
console.log(Number.isFinite(big))
console.log(Number.isSafeInteger(l))
console.log(Number.parseInt(k))

//instance methods
var a=25.4687
console.log(a.toFixed(2)) //change the value based on given param like after the pointing

var b=256867
var b_e=b.toExponential() //convert into exponential
console.log(b)
console.log(b_e)

var c=88
console.log(c.valueOf())//get the value of c

var d=25.4687
console.log(d.toPrecision(2)) //same as toFixed() like change the value like before the pointing value

var ko=90
console.log(ko.toString()) //convert into string

//precision
var h=6.2+6.3
console.log(h)

let h2=10.1+10.2
console.log(h2)//20.299999999999997
//to solve this problem
let h3=(10.1*100+10.2*100)/100
console.log(h3)