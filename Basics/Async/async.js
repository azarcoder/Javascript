console.log('start')
const fs=require('fs')
fs.readFile('fil1.txt',callback1)
function callback1(err,data){
    if(err)
        console.log(err)
    console.log(data)
}
//random access
fs.readFile('fil1.txt',callback2)
function callback2(err,data){
    if(err)
        console.log(err)
    console.log(data)
}
console.log('end')
