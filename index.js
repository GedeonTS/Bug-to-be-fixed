const wrapper = document.querySelector(body);
const text = document.createElement('h1');
const button = document.createElement('button');


wrapper.append(text, button);
button.innerText = 'Click me!';

button.addEventListener('click', () => {
    text.innerText = 'HEllo JAU!';
});