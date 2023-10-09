'use strict';
import './style.css';
import './assets/images/logo.svg';
import './assets/images/sun.svg';
import './assets/images/moon.svg';
import './assets/images/ava_duck.svg';
import './assets/images/ava_alian.svg';
import './assets/images/ava_star.svg';
import './assets/images/ava_alpaca.svg';
import './assets/images/ava_dog.svg';
import './assets/images/phone.png';
import './assets/images/dark_phone.png';
import './assets/images/phone_small.png';
import './assets/images/dark_small_phone.png';
import './assets/images/api.png';
import './assets/images/small_api.png';
import './assets/images/bnb.svg';
import './assets/images/btc.svg';
import './assets/images/eth.svg';
import './assets/images/ltc.svg';
import './assets/images/ton.svg';
import './assets/images/trx.svg';
import './assets/images/usdc.svg';
import './assets/images/usdt.svg';
import './assets/images/tg_background.jpg';
import './assets/images/telegram.svg';
import './assets/images/js.svg';
import './assets/images/net.svg';
import './assets/images/php.svg';
import './assets/images/python.svg';
import './assets/images/go.svg';
import './assets/images/mouse.png';
import './assets/images/pointer.svg';

const darkThemeClass = 'dark_theme';
const whiteThemeClass = 'white_theme';

const $body = document.querySelector('body');
const $theme_toggle = document.getElementById('theme_toggle');

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

if ($theme_toggle) {
    $theme_toggle.addEventListener('click', onToggleTheme);
}
