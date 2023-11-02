const display = document.querySelector('.display > input');

const numPad = document.querySelector('.numPad');
numPad.addEventListener('click', (event) => {
    let target = event.target;
    if(target.classList.contains('key')) {
        //console.log(target.getAttribute('value'));
        if(parseInt(display.getAttribute('value')) === 0) {
            display.setAttribute('value', target.getAttribute('value')) 
        } else {
            display.setAttribute('value', display.getAttribute('value') + target.getAttribute('value'))
        } 
    }
});