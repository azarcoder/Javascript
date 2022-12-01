const [a,b,c]=['egg','butter','veggie']
console.log(a,b,c)

//skip
var [i1,,i3]=['egg','butter','veggie']
console.log(i1,i3)

//default val
var [i1,i2,i3]=['egg','butter']
console.log(i1,i2,i3)

//assign default 
var [i1,i2,i3='maggie']=['egg','butter']
console.log(i1,i2,i3)

//nested
var [,,,[,,i]]=['e','g','h',['f','r','azar']]
console.log(i)

//spread operator
var x=[1,2,3,4,5,6,7,8,9]
var n=[...x] //copy all elements
console.log(n)

//rest param
var [i,j,...k]=[1,2,3,4,5,6,'ji']
console.log(i,j,k)