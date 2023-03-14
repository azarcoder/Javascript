var azar = {
    name : "Azarudeen",
    dob : 2002,
    city : "trichy",
    age(){
        return 2022-this.dob
    }
}
const a = prompt("enter a details of azar(name,age,city)")
if(a=='age')
console.log(azar[a]())
else
console.log(azar[a])