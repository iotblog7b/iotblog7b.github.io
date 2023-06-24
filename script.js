const colorInput = document.querySelector('input[type=color]');
const colorButton = document.querySelector('b');
const colorVariable = '--primBackgrdColor';


document.documentElement.style.setProperty(colorVariable, localStorage.getItem('colorVariableLocal'));





colorInput.addEventListener('change', e => {
    //console.log(e.target.value)
    document.documentElement.style.setProperty(colorVariable, e.target.value);
    tgv = e.target.value
})

colorButton .addEventListener('click', _ => {
    document.documentElement.style.setProperty(colorVariable, colorInput);
    
    localStorage.setItem('colorVariableLocal', tgv);
});
