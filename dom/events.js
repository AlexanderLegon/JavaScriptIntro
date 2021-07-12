//
// var titleElement = document.getElementById("title");
//
// console.log(titleElement);
//
// titleElement.style.color = "red";
//
// var listItems = document.getElementsByTagName('li');
//
// console.log(listItems);
//
// for (var i = 0; i < listItems.length; i++) {
// if(listItems[i].innerHTML == "item2"){
//   listItems[i].style.color = "blue"
//   listItems[i].innerHTML = "item4"
// }
// }
//
// titleElement.addEventListener("click", function(){
//   console.log("element is clicked");
//   titleElement.style.color = "blue";
// });
//
// titleElement.addEventListener("mouseout", function(){
//   console.log("element is clicked");
//   titleElement.style.color = "red";
// });

//AC clears all values and screen set to 0

//Store clicked number
var firstNumber = null;
var secondNumber = null;
var operator = null;
var result = null;
var zero = "0";
//if first = null replace, otherwise concat, null is falsey

var operators = document.getElementsByClassName('operator');
var numbers = document.getElementsByClassName('numberInput');
// var buttons = document.getElementsByClassName('button');
var screen = document.getElementById("screen");

function calculateResult(){
  if(secondNumber !== null){
    console.log(operator);
    if(operator == "+"){
        result  = parseInt(firstNumber) + parseInt(secondNumber);
        screen.innerHTML = result;
    }
    if(operator == "-"){
        result  = parseInt(firstNumber) - parseInt(secondNumber);
        screen.innerHTML = result;
    }
    if(operator == "*"){
        result  = parseInt(firstNumber) * parseInt(secondNumber);
        screen.innerHTML = result;
    }
    if(operator == "/"){
        result  = parseInt(firstNumber) / parseInt(secondNumber);
        screen.innerHTML = result;
    }
    if(operator == "%"){
        result  = parseInt(firstNumber) % parseInt(secondNumber);
        screen.innerHTML = result;
    }
  }
}


for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click',function(){
    if(!secondNumber && !operator){
      if(!firstNumber){
        firstNumber = numbers[i].innerText;
        screen.innerHTML = firstNumber;
      }
      else{
        firstNumber = firstNumber + numbers[i].innerText;
        screen.innerHTML = firstNumber;
      }
    }else if (!secondNumber) {
      secondNumber = numbers[i].innerText;
      screen.innerHTML = secondNumber;
    }
    else{
      secondNumber = secondNumber + numbers[i].innerText;
      screen.innerHTML = secondNumber;
    }
  });
}

for (let j = 0; j < operators.length; j++) {
  operators[j].addEventListener('click',function(){
    if(!operators[j].innerText.match("=")){
    operator = operators[j].innerText;
    console.log(operator);
    if(operators[j].innerText.match("A/C")){
      screen.innerHTML = zero;
      operator = null;
      firstNumber = null;
      secondNumber = null;
    }
    }
  });
  if(operators[j].innerText.match("=")){
    operators[j].addEventListener('click',calculateResult)
  }}


// screen.innerHTML = buttons[i].innerHTML;
// if(!firstNumber){
//   firstNumber = buttons[i].innerText;
//   screen.innerHTML = firstNumber;
// }
// else if(!operator){
//   operator = buttons[i].innerText;
// }
// else if(!secondNumber){
//   secondNumber = buttons[i].innerText;
//   screen.innerHTML = secondNumber;
// }
