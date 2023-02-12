const container = document.querySelector('#container');
const paraRed = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const para = document.createElement('p');
const btn = document.querySelector('#btn');

paraRed.textContent = "Hey I'm red!";
paraRed.style.color = 'red';

h3.textContent = "I'm a blue h3!"
h3.style.color = ' blue'

h1.textContent = "I'm in a div";

para.textContent = "ME TOO!"

// btn.addEventListener('click', () => {
//     alert("Hello World");
// });

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
    e.target.style.color = 'white';
});

div.append(h1);
div.append(para);
container.append(paraRed);
container.append(h3);
container.append(div);


