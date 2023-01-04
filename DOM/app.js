//DOM MANIPULATION

//getElementById()--used to select an id (unique id) elements
var h =document.getElementById('head')
// console.log(h)

//getElementByClassName --used to select all class names returns an array
const l =document.getElementsByClassName('list-items')
// console.log(l)

//getElementByTagName -- used to select all tags of given
const t=document.getElementsByTagName('li')
// console.log(l)

//querySelector -- used to select div(single)
// const container=document.querySelector('.div')
// console.log(container)

//querySelectorAll -- used to select multiple div(same class)
const container=document.querySelectorAll('.div')
console.log(container)

