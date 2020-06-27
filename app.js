const numberCounter = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');



function decreaseNumber() {
    numberCounter.textContent--;

    if(numberCounter.textContent == 0){
        numberCounter.style.color = 'black';
    }else if (numberCounter.textContent < 0) {
        numberCounter.style.color = 'red'; 
    }
}

function increaseNumber() {
    numberCounter.textContent++;

    if(numberCounter.textContent == 0){
        numberCounter.style.color = 'black';
    } else if (numberCounter.textContent > 0 ) {
        numberCounter.style.color = 'green';
    }
}

decreaseBtn.addEventListener('click', decreaseNumber);
decreaseBtn.addEventListener('keydown', decreaseNumber);
increaseBtn.addEventListener('click', increaseNumber);
increaseBtn.addEventListener('keydown', increaseNumber);