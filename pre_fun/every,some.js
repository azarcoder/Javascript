// every  - check all array values passes a test
// some  - check atleast one array values passes a test
//return bool
//3 args supported same as foreach
var a =[2,4,6,8,1]
var t = a.every(i=>i%2==0)
var s=a.some(i=>i%2==0)
console.log(t,s)
