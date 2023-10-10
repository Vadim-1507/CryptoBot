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