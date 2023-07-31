//parentNode
const itemList = document.querySelector('#items')
const parent = itemList.parentNode
console.log(parent)
parent.style.backgroundColor = 'grey'
//parentElement
const itemListElement = document.querySelector('#items')
const parentElement = itemList.parentElement

console.log(itemList.childNodes)
console.log(itemList.children)
console.log(itemList.firstChild)
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent='Hello'

console.log(itemList.lastChild)
console.log(itemList.lastElementChild)

//sibling
console.log(itemList.nextSibling)
console.log(itemList.nextElementSibling)
console.log(itemList.previousSibling)
console.log(itemList.previousElementSibling)

//creating dom element
var newDiv = document.createElement('div')
newDiv.className = 'newDiv'
newDiv.setAttribute('title','newer div')

var newDivChild = document.createTextNode('hello world')
newDiv.appendChild(newDivChild)
console.log(newDiv)

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')

container.insertBefore(newDiv,h1)