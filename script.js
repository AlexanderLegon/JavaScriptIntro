// debugger

// console.log("I AM HERE");
// var name = "name10";
// var age = 20;
// console.log(name + " is " + age);

//Functions

// function addNumbers(num1, num2){
//   var result = num1 + num2;
//   return result;
// }
//
//
// console.log(addNumbers(1,2));
//
// //Function Exercise
//
// var answer = addNumbers(addNumbers(5,7), addNumbers((2,10),2));
// console.log(answer);

//Data Types

// //String
// var string = "hello";
// console.log(string.length);
// console.log(string.indexOf('e'));
// console.log(string.substr(2,4));
//
// //Numbers
// var myNumber = 5;
// var myOtherNumber = 5.5;
// var myExponential = 123e5;
// console.log(myNumber);
// console.log(myOtherNumber);
// console.log(myExponential);
// console.log(myNumber%3);
//
// //Boolean
// var bool = true;
// var boolfalse = false;
//
// //Arrays
// function test(){
//   console.log("test");
// }
// var myArray = [5,6,7,"s","b",test];
// var myArray2 = [5,6,7,"s","b"];
// console.log(myArray);
// console.log(myArray[2]);
// console.log(myArray[5]());
// console.log(myArray.length);
// myArray[0] = 9;
// console.log(myArray[0]);
// console.log(myNewArray = myArray2 + [,"more", "data"]);
// console.log(typeof myNewArray);
// console.log(myNewArray.length);

//Type Coercion

// var myString = "5";
// var myNumber = 3;
// console.log( myNumber + myNumber + myString);
// var myDecimalString = "2.5"
// console.log(parseInt(myString) + myNumber);
// console.log(parseFloat(myDecimalString) + myNumber);
// console.log(parseInt(myDecimalString) + myNumber);

//if statements

// var money = prompt('How broke are you')
// if (money >10){
//   console.log("u aint broke");
// }
// else {
//   console.log("broke");
// }

//Loops
// var x = 5;
// var y =5;
// while (x<10) {
//   console.log(x += 1);
// }
//
// var array = [1,2,3,4,5,6];
// for(var i =0; i <array.length;i++){
//   console.log(array[i]);
// }
//
// do{
//   console.log(y +=1);
// } while(y<10);
//
// var obj = {
//   name: "name1",
//   age: 12,
//   school: "schoolname",
//   exam_results:{
//     maths:true
//   }
// }
//
// for(var key in obj){
//   console.log(key);
//   console.log(obj[key]);
// }

//Scope

//lexical Scope

// *Code can see out but cant see in*
var outsideVar = 5; //global scope
function doSomething() {
  tower = 10; //makes it a global variable
  var towers = 10;
  console.log(outsideVar);
}
//console.log(towers); doesnt work as it cant see inside method
doSomething();
