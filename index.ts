// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

appDiv.innerHTML = `<h1> Hello World </h1>`;
appDiv.innerHTML += `<h2> How are you? </h2>`;

const name:string = "John";

// "" and '' -- use the + op to contatenate
// `` -- use template literal ${name_of_variable}

appDiv.innerHTML += `<h3>My name is ${name}</h3>`;
