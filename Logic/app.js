arr2d = [
    ["a","b","c"],
    ["c","d","f"],
    ["d","f","g"]
]
// console.log(arr2d.flat())//convert into single dimentional
let count = arr2d.flat().reduce(
    (accumulator,cuurval)=> {
        if(accumulator[cuurval])
            accumulator[cuurval]++
        else 
            accumulator[cuurval]=1
        return accumulator
    }
    ,{})
console.log(count)