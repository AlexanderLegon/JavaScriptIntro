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
//if first = null replace, otherwise concat, null is falsey


var buttons = document.getElementsByClassName('button');
var screen = document.getElementById("screen");

function calculateResult(){
  console.log(firstNumber + "" + operator + ""+ secondNumber);
  screen.innerHTML = firstNumber + "" + operator+ ""+secondNumber;
}


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click',function(){
    // screen.innerHTML = buttons[i].innerHTML;
    if(!firstNumber){
      firstNumber = buttons[i].innerHTML;
      screen.innerHTML = firstNumber;
    }
    else if(!operator){
      operator = buttons[i].innerHTML;
    }
    else if(!secondNumber){
      secondNumber = buttons[i].innerHTML;
      screen.innerHTML = secondNumber;
    }
  })

  if(buttons[i].innerHTML.match("=")){
    buttons[i].addEventListener('click',calculateResult)
  }
}
