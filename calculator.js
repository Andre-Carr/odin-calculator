const display = document.querySelector('.display > input');

/*
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
*/

const keyPad = document.querySelector('.keyPad');
keyPad.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('key')) {
        target.classList.forEach((keyClass) => {
            switch(keyClass) {
                case 'clearKey':
                    console.log('clearKey');
                    break;
                case 'numberKey':
                    console.log('numberKey');
                    input(target);
                    break;
                case 'operationKey':
                    console.log('operationKey');
                    break;
            }
        });
    }
});

const input = function inputNumberKey(key) {
    if(parseInt(display.getAttribute('value')) === 0) {
        display.setAttribute('value', key.getAttribute('value'));
    } else {
        display.setAttribute('value', display.getAttribute('value') + key.getAttribute('value'));
    } 
}