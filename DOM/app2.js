// const t = document.querySelector('#main-heading')
// t.style.color='red'

const l=document.querySelectorAll('.list-items')
for (i=0;i<l.length;i++)
    l[i].style.fontSize='3em'
console.log(l)

//create element
const ul = document.querySelector('ul')
const li = document.createElement('li')

//Adding element
ul.append(li) 

//Modifying the text
const fl = document.querySelector('.list-items') //it will select only first list item
console.log(`innerText ${fl.innerText}`)
console.log('textContent'+' '+fl.textContent)
console.log('innerHTML'+' '+fl.innerHTML)
li.innerText='Iron Man'

//Modifying Attributes & classes
li.setAttribute('id','heading') //it will get exact same style of (heading id style)

//remove attribute
li.removeAttribute('id')

const g = document.querySelector('#main-heading')
console.log(g.getAttribute('id'))//it will get id name or class name

li.classList.add('list-items') //li element add into list-items

// li.classList.remove('list-items')
console.log(li.classList.contains('list-items')) //return boolean

//remove elements
li.remove()//delete an element
