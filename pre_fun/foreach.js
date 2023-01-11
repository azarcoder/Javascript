//foreach method calls a function (a callback function) once for each array element
var a=[1,2,3,4,5,0,56]

let t=''

a.forEach(mfn);

function mfn(value,index,array)
{
    t+=value+" "
    console.log("index:"+index+" "+"array:"+array)
}
console.log(t)

/*this function takes 3 args
1.item value
2.item index
3.array itself
*/