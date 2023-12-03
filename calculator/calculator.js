let input = document.querySelector('input');
//!Buttons
let buttonOne = document.querySelector('.js-button-1');
let buttonTwo = document.querySelector('.js-button-2');
let buttonThree = document.querySelector('.js-button-3');
let buttonBackspace = document.querySelector('.js-button-backSpace');
//break
let buttonFour = document.querySelector('.js-button-4');
let buttonFive = document.querySelector('.js-button-5');
let buttonSix = document.querySelector('.js-button-6');
let buttonPlus = document.querySelector('.js-button-plus');
//break
let buttonSeven = document.querySelector('.js-button-7');
let buttonEight = document.querySelector('.js-button-8');
let buttonNine = document.querySelector('.js-button-9');
let buttonMinus = document.querySelector('.js-button-minus');
//break
let buttonZero = document.querySelector('.js-button-zero');
let buttonDot = document.querySelector('.js-button-dot');
let buttonDivide = document.querySelector('.js-button-divide');
let buttonMultiply = document.querySelector('.js-button-multiply');
//break
let buttonEqual = document.querySelector('.js-button-equal');
let leftBracket = document.querySelector('.js-button-leftBracket');
let rightBracket = document.querySelector('.js-button-rightBracket');
let buttonClear = document.querySelector('.js-button-clear');
// alert("hi")
//!add event listeners
let calculation =  [];
//TODO displaying
function display(){
  let inputValue = ""
  calculation.forEach((value) => {
    inputValue += value;
    input.value = inputValue;
  
  })
}

buttonOne.addEventListener('click', () => {
  calculation.push("1");
  display()
})
buttonTwo.addEventListener('click', () => {
  calculation.push("2");
  display()
})
buttonThree.addEventListener('click', () => {
  calculation.push("3");
    display()
})
buttonBackspace.addEventListener('click', () => {
  calculation.pop();
  input.value = calculation
    display()
  //alert(calculation)
})
//break
buttonFour.addEventListener('click', () => {
  calculation.push("4");
    display()
})
buttonFive.addEventListener('click', () => {
  calculation.push("5");
    display()
})
buttonSix.addEventListener('click', () => {
  calculation.push("6");
    display()
})
buttonPlus.addEventListener('click', () => {
  calculation.push(" + ");
    display()
})
//break
buttonSeven.addEventListener('click', () => {
  calculation.push("7");
    display()
})
buttonEight.addEventListener('click', () => {
  calculation.push("8");
    display()
})
buttonNine.addEventListener('click', () => {
  calculation.push("9");
    display()
})
buttonMinus.addEventListener('click', () => {
  calculation.push(" \- ");
    display()
})
//break
buttonZero.addEventListener('click', () => {
  calculation.push("0");
    display()
})
buttonDot.addEventListener('click', () => {
  calculation.push(".");
    display()
})
buttonDivide.addEventListener('click', () => {
  calculation.push(" / ");
    display()
})
buttonMultiply.addEventListener('click', () => {
  calculation.push(" * ");
    display()
})
leftBracket.addEventListener('click', () => {
  calculation.push(" ( ");
  display()
})
rightBracket.addEventListener('click', () => {
  calculation.push(" ) ");
  display()
})
//clear
buttonClear.addEventListener('click', () => {
  calculation = [];
  input.value = ''
  // console.log(calculation);
})
//equal
function equal(){
  let calculationValue = "";
  calculation.forEach((value) => {
    calculationValue += value;
   // localStorage.setItem('calculationValue', calculationValue);
    // console.log(calculationValue)
  })

  calculationValue = eval(calculationValue)
  input.value = calculationValue;
  // calculation[0] = calculationValue;
  display();
  calculation = [];
  calculation[0] = calculationValue
}
buttonEqual.addEventListener('click', equal)
//for keyboard Backspace
document.body.addEventListener('keydown', (event) => {
  console.log(event.key)

  switch(event.key){
    case '1':
      calculation.push("1");
      buttonOne.classList.add('pressed');
      display();
      setTimeout(() => {document.querySelector('.js-button-1').classList.remove('pressed');} , 80);
      break;
    case '2':
      calculation.push("2");
      buttonTwo.classList.add('pressed');
      display();
      setTimeout(() => {document.querySelector('.js-button-2').classList.remove('pressed');} , 300);
      break;
    case '3':
      calculation.push("3");
      buttonThree.classList.add('pressed');
      display();
      setTimeout(() => {document.querySelector('.js-button-3').classList.remove('pressed');} , 300);
      break;
    case '+':
      calculation.push(" + ")
      buttonPlus.classList.add('pressed');
      display();
      setTimeout(() => {document.querySelector('.js-button-plus').classList.remove('pressed');} , 300);
      break;
    case '4':
      calculation.push("4")
      buttonFour.classList.add('pressed');
      display();
      setTimeout(() => {document.querySelector('.js-button-4').classList.remove('pressed');} , 300);
      break;
    case '5':
      calculation.push("5")
      buttonFive.classList.add('pressed');
      display()
      setTimeout(() => {document.querySelector('.js-button-5').classList.remove('pressed');} , 300);
      break;
    case '6':
      calculation.push("6")
      buttonSix.classList.add('pressed');
      display();
      setTimeout(() => {document.querySelector('.js-button-6').classList.remove('pressed');} , 300);
      break;
    case '7':
      calculation.push('7');
      buttonSeven.classList.add('pressed');
      display();
      setTimeout(() => {document.querySelector('.js-button-7').classList.remove('pressed');} , 300);

      break;
    case '8':
      calculation.push('8');
      buttonEight.classList.add('pressed');
      display()
      setTimeout(() => {document.querySelector('.js-button-8').classList.remove('pressed');} , 300);
      break;
    case '9':
      equation('9');
      document.querySelector('.js-button-9').classList.add('pressed');
      setTimeout(() => {document.querySelector('.js-button-9').classList.remove('pressed');} , 300);
      break;
    case '0':
      calculation.push('0');
      buttonZero.classList.add('pressed');
      display()
      setTimeout(() => {document.querySelector('.js-button-0').classList.remove('pressed');} , 300);
      break;
    case '-':
      calculation.push(' - ');
      buttonMinus.classList.add('pressed');
      display();
      setTimeout(() => {document.querySelector('.js-button-minus').classList.remove('pressed');} , 300);
      break;
    case ')':
      calculation.push(' ) ');
      rightBracket.classList.add('pressed');
      display();
      setTimeout(() => {document.querySelector('.js-button-rightBracket').classList.remove('pressed');} , 300);
      break;
    case '(':
      calculation.push(' ( ');
      leftBracket.classList.add('pressed');
      display();
      setTimeout(() => {document.querySelector('.js-button-leftBracket').classList.remove('pressed');} , 300);
      break;
    case '*':
      calculation.push(' * ');
      buttonMultiply.classList.add('pressed');
      display();
      setTimeout(() => {document.querySelector('.js-button-multiply').classList.remove('pressed');} , 300);
      break;
    case '/':
      calculation.push(' / ');
      buttonDivide.classList.add('pressed');
      display();
      setTimeout(() => {document.querySelector('.js-button-divide').classList.remove('pressed');} , 300);
      break;
    case '.':
      calculation.push('.');
      buttonDot.classList.add('pressed');
      display()
      setTimeout(() => {document.querySelector('.js-button-dot').classList.remove('pressed');} , 300);
      break;
    case '=':
      equal();
      buttonEqual.classList.add('pressed');
      setTimeout(() => {document.querySelector('.js-button-equal').classList.remove('pressed');} , 300);
      break;
    case 'Enter':
      equal();
      break;
    
    case 'Backspace':
      calculation.pop();
      input.value = calculation
        display();
  }
})