const fs=require('fs')//constatnt
// console.log(fs)//print pre-defined functions
console.log('start')
let data = fs.readFileSync('fil1.txt')
console.log(data)
console.log('end')