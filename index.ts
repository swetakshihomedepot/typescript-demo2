// Import stylesheets
import './style.css';

// demo 1
const appDiv: HTMLElement = document.getElementById('app');

appDiv.innerHTML = `<h1> Hello World </h1>`;
appDiv.innerHTML += `<h2> How are you? </h2>`;

const name: string = 'John';
// "" and '' -- use the + op to contatenate
// `` -- use template literal ${name_of_variable}
appDiv.innerHTML += `<h3>My name is ${name}</h3>`;

// demo 2
function addNumber(a: number, b: number) {
  appDiv.innerHTML += `<p>Let us sum the number ${a} and ${b}.</p>`;
  return a + b;
}
var sum: number = addNumber(10, 20);
appDiv.innerHTML += `<p>Sum of 10 and 20 is ${sum}.</p>`;

// js
// function addNumbers(a, b) {
//   return a + b;
// }
// var sum1 = addNumber(10, 20);
// console.log(sum1); // prints 30

// demo 3 working with interface

// define the interface
interface OS {
  name: String;
  language: String;
}
// create a function to print the values
let OpSystem = (type: OS): void => {
  appDiv.innerHTML += `Android ${type.name} has ${type.language} language.`;
};

// create an instance of the interface and assign values
let Oreo: OS = {
  name: 'O',
  language: 'Java',
};
// call the function
OpSystem(Oreo);
