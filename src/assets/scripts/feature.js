export function setCreateAnimation(element) {
    const $btn = document.getElementById('create_app_btn');
    const $arrow = document.getElementById('create_app_arrow');

    function setAnimation() {
        $btn.classList.add('feature_button_click');
        $arrow.classList.add('arrow_to_btn');

        setTimeout(() => {
            $btn.classList.remove('feature_button_click');
            $arrow.classList.remove('arrow_to_btn');
        }, 1750);
    }

    element.addEventListener('mouseenter', setAnimation);
    element.addEventListener('touchstart', setAnimation);
}

export function onChangeCurrency(element) {
    let started = false;
    const $container = document.getElementById('currencies_wrap');
    element.addEventListener('click', async () => {
        if (started) return;
        started = true;
        const $currencies = element.querySelectorAll('.feature_real-time__currency');
        const $activeCurr = element.querySelector('.feature_real-time__currency.active');
        let $next;
        let $svg;
        $currencies.forEach((curr) => {
            if (curr.classList.contains('active')) {
                curr.classList.add('last_currency');
            };
            curr.classList.add('shift_currency');
            if (curr.getAttribute('id') === $activeCurr.getAttribute('data-next')) {
                $next = curr;
                $svg = curr.getElementsByTagName('svg')[0];
                $svg.classList.add('next_currency');
            }
        });
        // 0.7s
        setTimeout(() => {
            $currencies.forEach((curr) => {
                curr.classList.remove('last_currency');
                curr.classList.remove('shift_currency');
            });
            $svg.classList.remove('next_currency');
            $next.classList.add('active');
            $activeCurr.remove();
            $activeCurr.classList.remove('active');
            $container.prepend($activeCurr);
            started = false;
        }, 690);
    });
}

export function onChangeMessage(element) {
    const $messages = element.querySelectorAll('[data-next]');
    let started = false;
    element.addEventListener('click', () => {
        if (started) return;
        started = true;
        let active;
        let behind;
        let next;
        $messages.forEach((message) => {
            if(message.classList.contains('behind_message')) {
                behind = message;
                return false;
            }
            if(!message.classList.contains('hide')
                && !message.classList.contains('behind_message')
                && !message.classList.contains('hide_message')) {
                active = message;
            }
            return false;
        });
        next = active.nextElementSibling;
        if (behind) {
            behind.classList.add('hide_message');
            behind.classList.remove('behind_message');
        }
        active.classList.add('behind_message');
        active.classList.remove('active_message');
        next.classList.add('active_message');
        next.classList.remove('hide');
        next.classList.remove('behind_message');
        next.classList.remove('hide_message');
        setTimeout(() => {
            if (behind) {
                const parent = behind.parentElement;
                behind.remove();
                behind.classList.add('hide');
                behind.classList.remove('hide_message');
                parent.append(behind);
            }
            started = false;
        }, 690);
    });
}