"use strict";
// function
// Function declaration
// Arrow function

// function logger() { // declaration
//     console.log("This is a function");
// }
// logger();

// const calc = () => { // callback
//     console.log("This is a cb");
// };
// calc();

const nameRobot = prompt("Ismingizni kiriting: ");
const colorRobot = prompt("Color kiriting: ");
const modelRobot = prompt("Model kiriting: ");

function Robot(name, color, model) {
    console.log(`My name is ${name}. Color: ${color}, Model: ${model}`);
}

// Robot("Asadbek", "Black", "GRD-2000");
Robot(nameRobot, colorRobot, modelRobot);