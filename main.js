//Pobieramy elementy
const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber p');

const mathSign = document.querySelector('.mathSign');

const numbersButtons = document.querySelectorAll('.number');

const operatorsButtons = document.querySelectorAll('.operator');

const equalsButton = document.querySelector('.equals');
const clearAll = document.querySelector('.clearAll');
const clearOne = document.querySelector('.clearOne');


 let result = '';
//Funckcje 

function dispalyNumbers(){
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '.0'

    currentNumber.innerHTML += this.textContent;
}

function operate(){
     if(currentNumber.innerHTML === '' && this.textContent === '-'){
     currentNumber.innerHTML = '-';
     return;
     }
     
     else if (currentNumber.innerHTML === '') {
         return;
     }

     if(mathSing.innerHTML!== ''){
         showResult();
     }
     previousNumber.innerHTML += currentNumber.innerHTML;
     mathSing.innerHTML = this.textContent;
     currentNumber.innerHTML = '';
}
  


function showResult () {
    
}

function clearScreen () {

}

function clearNumber () {

}










//Nasłuchiwanie na przyciski
operatorsButtons.forEach((button) => button.addEventListener('click', operate))

 equalsButton.addEventListener('click', showResult);


 numbersButtons.forEach((button) => {
     button.addEventListener('click', dispalyNumbers)
 })