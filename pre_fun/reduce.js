/*
Reduce runs function on each array element to produce (reduce it to) a single value
works on ltr but reduceRight() available
doesn't affect original array
it takes 4 args
1.total(the initial value/previously returned value)
2.value
3.index
4.array itself
*/
var j = [2,2,3,3]

k = j.reduce(ss)
l = j.reduce(ss,10) //2 args is by defalut value to add with , it can accept an initial value 
console.log(k)
function ss(t,v)
{
    return t+v
}

//oneline
var t=[1,2,3,4,5]
var ans = t.reduce((t,v)=>t+v)
console.log("reduce:"+ans)

//reduceRight() - rtl
var rt =[12,-1,1,12]
var rr = rt.reduceRight((t,v)=>t+v)
console.log("reduce right:"+rr)