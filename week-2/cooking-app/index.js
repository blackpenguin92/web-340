/**
 * Author: Cesar Acevedo
 * Date: 06/05/25
 * File Name: index.js
 * Description: displays functions from recipes.js
*/

// TODO: Import your module using require
const { createRecipe, setTimer, quit } = require("./recipes")

// TODO: Implement your CLI program here
console.log(createRecipe(["salt", "pepper", "garlic"]));
console.log(setTimer(15));
console.log(quit());