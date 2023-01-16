//Pobieramy elementy
const number = document.querySelectorAll('.number')
const operateMath = document.querySelectorAll('.operate')
const clearAll = document.querySelector('.clear-all')
const clearOne = document.querySelector('.clear-one')
const equales = document.querySelector('.equales')
const previousScore = document.querySelector('.previous-score')
const currentScore = document.querySelector('.current-score')
const errorInfo = document.querySelector('.error')
const closeBtn = document.querySelector('.close')

let currentOperation = ''
let previousOperation = ''
let operation = undefined

//Funckcje

const calculate = () => {
	let mathOperate

	if (!previousOperation || !currentOperation) {
		return
	}

	const past = parseFloat(previousOperation)
	const currently = parseFloat(currentOperation)

	if (isNaN(past) || isNaN(currently)) {
		return
	}

	switch (operation) {
		case '+':
			mathOperate = past + currently
			break
		case '-':
			mathOperate = past - currently
			break
		case 'x':
			mathOperate = past * currently
			break
		case '÷':
			if (currently === 0) {
				errorInfo.style.display = 'grid'
				clearAllNumbers()
				return
			}
			mathOperate = past / currently
			break
		case '√':
			mathOperate = Math.pow(past, 1 / currently)
			break
		case '%':
			mathOperate = (past / 100) * currently
			break
		case '^':
			mathOperate = Math.pow(past, currently)
			break
		case 'log':
			mathOperate = Math.log(past) / Math.log(currently)
			break
		default:
			return
	}
	currentOperation = mathOperate
	operation = undefined
	previousOperation = ''
}

const mathOperations = operate => {
	if (currentOperation === '') {
		return
	}

	if (previousOperation !== '') {
		const past = previousScore.innerText
		if (currentoperation.toString() === '0' && past[past.lenght - 1] === '÷') {
			errorInfo.style.display = 'grid'
			clearAllNumbers()
			return
		}
		calculate()
	}
	operation = operate
	previousOperation = currentOperation
	currentOperation = ''
}

const updateResult = () => {
	currentScore.innerText = currentOperation
	if (operation != null) {
		previousScore.innerText = previousOperation + operation
	} else {
		previousScore.innerText = ''
	}
}

const add = number => {
	if (number === '.') {
		if (currentOperation.includes('.')) {
			return
		}
	}
	currentOperation = currentOperation.toString() + number.toString()
}
const closeModalError = () => {
	if (!(errorInfo.style.display === 'grid')) {
		errorInfo.style.display = 'grid'
	}else {
		errorInfo.style.display = 'none'
	}
	errorInfo.classList.toggle('modal-animation')
}

number.forEach(number => {
	number.addEventListener('click', () => {
		add(number.innerText)
		updateResult()
	})
})

// Usuwanie liczb
const clearNumber = () => {
	currentOperation = currentOperation.toString().slice(0, -1)
}
const clearAllNumbers = () => {
	currentOperation = ''
	previousOperation = ''
	operation = undefined
}

//Nasłuchiwanie na przyciski
operateMath.forEach(operate => {
	operate.addEventListener('click', () => {
		mathOperations(operate.innerText)
		updateResult()
	})
})
closeBtn.addEventListener('click', () => {
	closeModalError()
	updateResult()
})
equales.addEventListener('click', () => {
	calculate()
	updateResult()
})

clearOne.addEventListener('click', () => {
	clearNumber()
	updateResult()
})
clearAll.addEventListener('click', () => {
	clearAllNumbers()
	updateResult()
})
