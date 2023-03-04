a=[1,2,3,4,5]
for(i=0;i<a.length;i++)
    console.log(a[i]+" ")

//foreach
a.forEach(function(v,i,arr)
{
    console.log(i+"=>"+v+" "+arr)
})


//every
const under100 = x => (x<100)
if(a.every(under100))
{
    console.log("all are under 100")
}
else[
    console.log("some element is above 100")
]

//map
s = z =>Math.pow(z,2)
p = a.map(s)
console.log(a)
console.log(p)

//filter
f = x => (x%2==0)
p = a.filter(f)
console.log(p)

//reduce
sum = (x,y)=>x+y 
p = a.reduce(sum,0)
console.log(p)
