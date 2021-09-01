//Create Calculator class
//Create constructor inside the class object, wicth gonna take all inputs, and functions
//Create some variables fo this class

class Calculator {
	constructor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement,
		this.currentOperandTextElement = currentOperandTextElement,
		this.clear()
	}
	//Create function for our calculator class, for operate propetly

	clear() {
		//clears all the variables
		this.currentOperand = '',
		this.previousOperand = '',
		this.operation = undefined

	};

	delete(){
		//delete function for removing a single number
	};

	appendNumber(number){
		//adds a number to the screen whenever user presses the number
		this.currentOperand = number;
	};

	cooseOperation(operation) {
		//every time user clicks operation buttons on the calculator
	};

	compute(){
		//takes the value inside of the calculator, and compute the single value in to the calculator what we want to display

	};

	updateDisplay(){
		//updates the our values innside of our output
		this.currentOperandTextElement.innerText = this.currentOperand;
	}
};




const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	});
});