var a=[1,2,3,'fly']
for(i in a)
    console.log(a[i])

console.log('--------------')


//for await
async function main(){
for await(const i of [1,2,3,400,500,'Azarudeen']) 
    console.log(i)
}
main()

/*
notes:
for await method only use inside async function.

syntax:
async function main(){
for await(const i of statement) 
    console.log(i)
}
main()

*/