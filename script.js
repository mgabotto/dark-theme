

// let currTheme = 'black'

const btnContainer = document.querySelector('#theme');
const btn = document.querySelector('#btnTheme');
const title = document.querySelector('h1');

btnContainer.addEventListener('click', x => {
    displayTheme()
})

window.addEventListener('DOMContentLoaded', x => {
    displayTheme();
})



function displayTheme() {

    currTheme = localStorage.getItem('currentTheme')

    let style = document.documentElement.style;
    if (currTheme === 'white') {
        // Define el color de variables css
        style.setProperty('--main-color', 'rgb(255, 255, 255)');
        style.setProperty('--alt-color', 'rgb(0, 0, 0)')

        btn.classList.toggle('btnChange')
        title.textContent = 'Dark Theme'

        localStorage.setItem('currentTheme', 'black')
        
    } else {
        // Define el color de variables css
        style.setProperty('--main-color', 'rgb(0, 0, 0)');
        style.setProperty('--alt-color', 'rgb(255, 255, 255)')

        btn.classList.toggle('btnChange')
        title.textContent = 'White Theme'

        localStorage.setItem('currentTheme', 'white')
    }
}