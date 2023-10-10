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