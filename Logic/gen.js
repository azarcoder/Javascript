function* demo()
{
    var i=1
    while(i<=3)
    {
        yield i++
    }
} 
const gen = demo()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen)//Object [Generator] {}