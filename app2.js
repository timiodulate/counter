const numberCounter = document.getElementById('counter');
const buttons = document.querySelectorAll('.btn');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('increase')) {
            numberCounter.textContent++
        } else if(button.classList.contains('decrease')){
            numberCounter.textContent--
        }

        if (numberCounter.textContent < 0) {
            numberCounter.style.color = 'red';
        } else if (numberCounter.textContent > 0){
            numberCounter.style.color = 'green';
        } else {
            numberCounter.style.color = 'initial';
        }
    });

});


















// function decreaseNumber() {
//     numberCounter.textContent--;

//     if (numberCounter.textContent < 0) {
//         numberCounter.style.color = 'red'; 
//     }
// }

// function increaseNumber() {
//     numberCounter.textContent++;

//     if (numberCounter.textContent > 0) {
//         numberCounter.style.color = 'green'; 
//     }
// }

// decreaseBtn.addEventListener('click', decreaseNumber);
// decreaseBtn.addEventListener('keydown', decreaseNumber);
// increaseBtn.addEventListener('click', increaseNumber);
// increaseBtn.addEventListener('keydown', increaseNumber)