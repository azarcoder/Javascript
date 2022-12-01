//object are in key value pair
var azar={
    name:'Azar',
    age:20,
    married:false,
    friends: ['bilal','yogesh','dhivya','faisal'],
    address:{
        state: 'Tamilnadu',
        city:
        {
            name:'trichy',
            pincode:620017
        }
    }
};

// console.log(azar)

// //dot notation
// console.log(azar.age)

// //bracket notation
// console.log(azar['name'])

console.log(azar.friends[1]) //yogesh
console.log(azar.address.city.name) //trichy
console.log(azar)

delete azar.age //used to delete a key

console.log(azar)


