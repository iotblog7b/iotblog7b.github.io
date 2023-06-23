const colorInput = document.querySelector('input[type=color]');
const colorButton = document.querySelector('b');
const colorVariable = '--primBackgrdColor';

colorButton .addEventListener('click', _ => {
    document.documentElement.style.setProperty(colorVariable, '#bfff00');
});
