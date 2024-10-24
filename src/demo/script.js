// TODO: get a reference to the .box element and log it to the console
// Query selector takes a valid CSS selector
const box = document.querySelector('.box');
box.style.backgroundColor = 'green';

// TODO: add an event listener to the .box element that toggles the .left class

box.addEventListener('click', () => {
    box.classList.toggle('left');
})

// TODO: get a reference to #button, #txt and #output

const button = document.querySelector('#button');
const txt = document.querySelector('#txt');
const output = document.querySelector('#output');

// TODO: add an event listener to the #button that changes the text in #output to the lowercase value of #txt

button.addEventListener('click', () => {
    output.textContent = txt.value.toLowerCase();
})
