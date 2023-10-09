'use strict';

const darkThemeClass = 'dark_theme';
const whiteThemeClass = 'white_theme';

const $body = document.querySelector('body');

function onToggleTheme() {
    if ($body) {
        if ($body.classList.contains(darkThemeClass)) {
            $body.classList.remove(darkThemeClass);
            $body.classList.add(whiteThemeClass);
        } else {
            $body.classList.remove(whiteThemeClass);
            $body.classList.add(darkThemeClass);
        }
    }
}

function setThemeToggle(element) {
    element.addEventListener('click', onToggleTheme);
}

export default setThemeToggle;
