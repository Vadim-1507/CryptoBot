function Slider(props) {
    const {
        slider_id = 'slide_in_view',
        slider_list_id = 'slider_list',
        slide_item = '.slide',
        dots = 'slide_dots',
        active_slide_index = 'slide_number',
        slide_count = 'slide_count',
        direction_change_size = undefined,
        auto = true,
        delay = 5000,
    } = props;

    const default_transition = '.3s';

    const slider = document.getElementById(slider_id);
    const sliderList = document.getElementById(slider_list_id);
    const slideItems = document.querySelectorAll(slide_item);
    const activeIndex = document.getElementById(active_slide_index);
    const slideCount = document.getElementById(slide_count);
    let slideDots = [];

    let autoChange;

    if (slideItems.length > 0) {
        const first = slideItems[0].cloneNode(true);
        const last = slideItems[slideItems.length - 1].cloneNode(true);
        sliderList.append(first);
        sliderList.prepend(last);
    }

    let size = 0;
    let active_slide  = 1;
    let isVertical = false;
    let changer; // 'next' || 'prev'

    let axisX = null;
    let axisY = null;

    window.addEventListener('resize', init);
    slider.addEventListener('touchstart', handlerStartSwipe, false);
    slider.addEventListener('touchmove', handlerMoveSwipe, false);
    slider.addEventListener('touchend', swipeSlider);

    init();

    function addAutomatic() {
        if (auto && !autoChange) autoChange = setInterval(() => {
            tasks.next();
        }, delay);
    }

    function removeAutomatic () {
        clearInterval(autoChange);
        autoChange = undefined;
    }

    function setFluency() {
        setTimeout(() => sliderList.style.transition = default_transition, 10);
    }

    function init() {
        isVertical = direction_change_size ? window.innerWidth > direction_change_size : false;
        if (!slideItems.length > 0) return;
        size = isVertical ? slideItems[0].offsetHeight : slideItems[0].offsetWidth;
        createDots();
        slideCount.innerText = numProcessing(slideItems.length);
        slider.removeAttribute('style');
        sliderList.removeAttribute('style');
        slider.style[isVertical ? 'height' : 'width'] = `${size}px`;
        setActiveIndex();
        setActiveSlide();
        if (!isVertical) {
            sliderList.style.width = `${size * (slideItems.length + 2)}px`;
            sliderList.style.flexDirection = 'row';
            setFluency();
        }
        addAutomatic();
    }

    function setActiveSlide() {
        sliderList.style.transform = `translate${isVertical ? 'Y' : 'X'}(-${active_slide * size}px)`;
    }

    function numProcessing(num) {
        if (num <= 0) {
            return '00';
        }
        if (num < 10) {
            return `0${num}`;
        }
        return String(num);
    }

    function setActiveIndex() {
        activeIndex.innerText = numProcessing(active_slide);
    }

    function handlerStartSwipe(event) {
        if (!event.touches.length > 0) return;
        removeAutomatic();
        const touch = event.touches[0];
        axisX = touch.clientX;
        axisY = touch.clientY;
    }

    function setTasks(difference, value) {
        if (difference <= -value) {
            changer = 'next';
        } else if (difference >= value) {
            changer = 'prev';
        } else {
            changer = undefined;
        }
    }

    function handlerMoveSwipe(event) {
        if (!event.changedTouches || axisY === null || axisX === null) return;
        const { clientX, clientY } = event.changedTouches[0];
        const value = 120;
        let difference;
        if (isVertical) {
            difference = clientY - axisY;
            if (Math.abs(difference) > 0) {
                sliderList.style.transform = `translateY(${-(active_slide * size) + difference}px)`;
            }
        } else {
            difference = clientX - axisX;
            if (Math.abs(difference) > 0) {
                sliderList.style.transform = `translateX(${-(active_slide * size) + difference}px)`;
            }
        }
        setTasks(difference, value);
    }

    const tasks = {
        next() {
            active_slide++;
            rollSlider();
            changer = undefined;
        },
        prev() {
            active_slide--;
            rollSlider();
            changer = undefined;
        },
    };

    function swipeSlider() {
        if (!changer || typeof tasks[changer] !== 'function') {
            setActiveSlide();
            return;
        }
        tasks[changer]();
        addAutomatic();
    }

    function rollSlider() {
        setActiveSlide();
        setTimeout(() => {
            if (active_slide > slideItems.length) {
                sliderList.style.removeProperty('transition');
                active_slide = 1;
                setActiveSlide();
            } else if (active_slide < 1) {
                sliderList.style.removeProperty('transition');
                active_slide = slideItems.length;
                setActiveSlide();
            }
            setActiveIndex();
            activateDot();
            setFluency();
        }, 290);
    }

    function activateDot() {
        if (slideDots && slideDots.length > 0) {
            slideDots.forEach(dot => dot.classList.remove('active'));
            if (slideDots[active_slide - 1]) slideDots[active_slide - 1].classList.add('active');
        }
    }

    function onDotClick(event) {
        removeAutomatic();
        active_slide = parseInt(event.target.getAttribute('data-slide'), 10);
        activateDot();
        rollSlider();
        addAutomatic();
    }

    function createDots() {
        if (!dots || slideItems.length === slideDots.length) return;
        let i = 0;
        while(i < slideItems.length) {
            const dot = document.createElement('div');
            dot.classList.add('slide_dot');
            if (i + 1 === active_slide) dot.classList.add('active');
            dot.setAttribute('data-slide', String(i + 1));
            dot.addEventListener('click', onDotClick);
            slideDots.push(dot);
            document.getElementById(dots).appendChild(dot);
            i++;
        }
    }
}

export default Slider;