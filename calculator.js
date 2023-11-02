const display = document.querySelector('.display > input');

const numberKeys = document.querySelector('.numberKeys');
numberKeys.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('key')) {
        if(parseInt(display.getAttribute('value')) === 0) {
            display.setAttribute('value', target.getAttribute('value'));
        } else {
            display.setAttribute('value', display.getAttribute('value') + target.getAttribute('value'));
        } 
    }
});

const clearKeys = document.querySelector('.clearKeys');
clearKeys.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('key')) {
        switch(target.getAttribute('value')) {
            case 'allClear':
                display.setAttribute('value', 0);
                break;
            case 'clear' :
                display.setAttribute('value', 0);
                break;
    }
    }
});