//Pobieramy elementy
const number = document.querySelectorAll('.number')
const operateMath = document.querySelectorAll('.operate')
const clearAll= document.querySelector('.clear-all')
const clearOne = document.querySelector('.clear-one')
const equales = document.querySelector('.equales')
const previousScore = document.querySelector('.previous-score')
const currentScore = document.querySelector('.current-score')


let currentOperation = ''
let previousOperation = ''
let operation = undefined 

//Funckcje 

const mathOperations = (operate) => {
    if (currentOperation === '') {
        return
    }
     operation = operate
     previousOperation = currentOperation
     currentOperation = ''
}

const updateResult = () => {
    currentScore.innerText = currentOperation
    previousScore.innerText = previousOperation
}

const add = (number) => {
    if (number === ".") {
        if (currentOperation.includes('.')) {
            return
        }
    }
    currentOperation = currentOperation.toString() + number.toString()
}

number.forEach((number) => {
    number.addEventListener('click', () => {
        add(number.innerText)
        updateResult()
    })
})

operateMath.forEach((operate) => {
    operate.addEventListener('click', () => {
        mathOperations(operate.innerText)
        updateResult()
    })
})

const clearNumber = () => {
    currentOperation = currentOperation.toString().slice(0, -1)
}

// const clearAllNumber = () => {
//     currentOperation = currentOperation.toString().slice(0)
// }

//Nasłuchiwanie na przyciski
clearOne.addEventListener('click', () => {
    clearNumber()
    updateResult()
})
// clearAll.addEventListener('click', () =>{
//     clearAllNumber()
//     updateResult()
// })