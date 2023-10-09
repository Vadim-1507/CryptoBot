const periods = {
    all_time: {
        name: 'all time',
        volume: '$204,920',
        invoices: '16,256',
        payments: '9,353',
        users: '5,606',
        conversion: '57%',
    },
    today: {
        name: 'today',
        volume: '$6,530',
        payments: '1,253',
        invoices: '2,569',
        users: '1,606',
        conversion: '48%',
    },
    yesterday: {
        name: 'yesterday',
        volume: '$8,216',
        invoices: '4,980',
        payments: '3,012',
        users: '3,606',
        conversion: '60%',
    },
    week: {
        name: 'week',
        volume: '$27,426',
        invoices: '4,980',
        payments: '3,012',
        users: '3,606',
        conversion: '53%',
    },
    month: {
        name: 'month',
        volume: '$63,810',
        invoices: '9,569',
        payments: '8,453',
        users: '6,961',
        conversion: '54%',
    },
};

let ref;

function onToggleClasses(element) {
    if (element.classList.contains('active') || !ref) return false;
    const activeElems = ref.querySelectorAll('.button.active');
    activeElems.forEach((elem) => elem.classList.remove('active'));
    element.classList.add('active');
}

function onTogglePeriodData(period, button) {
    if (periods[period] && ref) {
        const data_keys = Object.keys(periods[period]);
        onToggleClasses(button);
        data_keys.forEach((key) => {
            const element = ref.querySelector(`[data-telegram="tg_${key}"]`);
            element.textContent = periods[period][key];
        });
    }
}

function onChangePeriod(event) {
    if (!event.target.hasAttribute('data-period')
        && !event.target.parentElement.hasAttribute('data-period')) return false;
    const period = event.target.getAttribute('data-period')
        || event.target.parentElement.getAttribute('data-period');
    const pressedBtn = event.target.hasAttribute('data-period') ? event.target : event.target.parentElement;
    onTogglePeriodData(period, pressedBtn);
}

function setTgDataChangerListener(element) {
    ref = element;
    element.addEventListener('click', onChangePeriod);
}

export default setTgDataChangerListener;