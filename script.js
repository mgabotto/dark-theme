

let currTheme = 'white'

const btnContainer = document.querySelector('#theme');
const btn = document.querySelector('#btnTheme');
const title = document.querySelector('h1');

btnContainer.addEventListener('click', x => {
    changeTheme()
})


function changeTheme() {

    let style = document.documentElement.style;
    if (currTheme === 'white') {
        style.setProperty('--main-color', 'rgb(255, 255, 255)');
        style.setProperty('--alt-color', 'rgb(0, 0, 0)')
        currTheme = 'black'
        btn.classList.toggle('btnChange')
        title.textContent = 'Dark Theme'
        
    } else {
        style.setProperty('--main-color', 'rgb(0, 0, 0)');
        style.setProperty('--alt-color', 'rgb(255, 255, 255)')
        currTheme = 'white'
        btn.classList.toggle('btnChange')
        title.textContent = 'White Theme'
    }
}