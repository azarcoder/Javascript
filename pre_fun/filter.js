let n = [1,2,3,4,5,6,7,8,9]

let v = n.filter(by3)
console.log(v)
function by3(v)
{
    return v%3==0;
}

//In one line
let z = [1,2,3,4,5,6,7,8,9,10]
let k = z.filter(i=> i%2==0)
console.log(k)