const colorInput = document.querySelector('input[type=color]')
const colorButton = document.querySelector('button')
const colorButton1 = document.querySelector('theme')
const colorButton2 = document.querySelector('button2')
const colorVariable = '--primBackgrdColor'

colorButton .addEventListener('click', _ => {
    document.documentElement.style.setProperty(colorVariable, 'red')
})
colorButton1 .addEventListener('click', _ => {
    document.documentElement.style.setProperty(colorVariable, 'red')
})
colorButton2 .addEventListener('click', _ => {
    document.documentElement.style.setProperty(colorVariable, 'yellow')
})