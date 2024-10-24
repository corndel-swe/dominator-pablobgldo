// TODO: increment and decrement the count when the buttons are clicked

const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
const count = document.getElementById('count');

increment.addEventListener('click', () => {
    count.textContent = parseInt(count.value) + 1;
})

decrement.addEventListener('click', () => {
    count.textContent = parseInt(count.value) -1;
})





