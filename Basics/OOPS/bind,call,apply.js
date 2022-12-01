let person1={
    name:'Azar',
    age:20,
    martital_status:false,
    about:function(){
        console.log(`Hey this is ${this.name} and i am ${this.age} years old and married:${this.martital_status}`)
    }
}
let person2={
    name:'Ameera',
    age:20,
    martital_status:true
}
let abt=function(city,profession){
    console.log(`Hey this is ${this.name} and i am ${this.age} years old and married:${this.martital_status} and am from ${city} ,profession:${profession}`)
}

//call
person1.about.call(person2)
abt.call(person1,'Newyork','Software Developer')

//apply --must within array
person1.about.apply(person2)
abt.apply(person2,['California','Web Developer'])

//bind --used to store into a function
let n=abt.bind(person2,['Tamilnadu','Film maker'])
console.log(n)
n()
