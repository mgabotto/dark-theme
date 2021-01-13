

let currTheme = localStorage.getItem('currentTheme')
let style = document.documentElement.style;

const btnContainer = document.querySelector('#theme');
const btn = document.querySelector('#btnTheme');
const title = document.querySelector('h1');

window.addEventListener('DOMContentLoaded', x => {
    displayTheme();
})


function displayTheme() {

    // Verificamos si existe storage data
    if (currTheme) {
        currTheme === 'white' ? whiteTheme() : darkTheme()
    } else {
        whiteTheme()
    }
}


btnContainer.addEventListener('click', x => {
    changeTheme()
})


function changeTheme() {
    if (currTheme === 'white') {
        darkTheme()
    }
    else  { // (currTheme === 'black')
        whiteTheme()
    }
}


function whiteTheme() {
    currTheme = 'white'
    style.setProperty('--main-color', 'rgb(0, 0, 0)');
    style.setProperty('--alt-color', 'rgb(255, 255, 255)')

    btn.classList.remove('btnChange')
    title.textContent = 'White Theme'

    localStorage.setItem('currentTheme', 'white')
}


function darkTheme() {
    currTheme = 'black'
    style.setProperty('--main-color', 'rgb(255, 255, 255)');
    style.setProperty('--alt-color', 'rgb(0, 0, 0)')

    btn.classList.add('btnChange')
    title.textContent = 'Dark Theme'

    localStorage.setItem('currentTheme', 'black')
}