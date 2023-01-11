//map() - creates a new array by performing a function on each array element
//it's doesn't change the original value

const x = [2,3,5,7,1]
const y =x.map(mul2);
console.log(y)
//this function same as foreach takes three args 1.value,2.index,3.array itself
function mul2(value)
{
    return value*=2
}