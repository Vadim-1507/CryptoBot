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

import setThemeToggle from './assets/scripts/theme_toggle';
import setTgDataChangerListener from './assets/scripts/tg_data_changer';
import { setCreateAnimation, onChangeCurrency, onChangeMessage } from './assets/scripts/feature';
import Slider from './assets/scripts/slider';

const $theme_toggle = document.getElementById('theme_toggle');

if ($theme_toggle) {
    setThemeToggle($theme_toggle);
}

// feature block animation
const $tg_chat = document.getElementById('telegram_chat');
if ($tg_chat) {
    setTgDataChangerListener($tg_chat);
}

const $createAppBlock = document.getElementById('create_app');
if ($createAppBlock) {
    setCreateAnimation($createAppBlock);
}

const $currenciesBlock = document.getElementById('currencies_block');
if ($currenciesBlock) {
    onChangeCurrency($currenciesBlock);
}

const $payments = document.getElementById('payment');
if ($payments) {
    onChangeMessage($payments);
}

const $coins = document.getElementById('coins');
if($coins) {
    onChangeMessage($coins);
}

Slider({ direction_change_size: 980 });
