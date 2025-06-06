/**
 * Author: Cesar Acevedo
 * Date: 06/05/25
 * File Name: recipes.js
 * Description: functions for recipes
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // TODO: Implement this function
  let message = "Recipe created with ingredients: "
  for(let i = 0; i < ingredients.length; i++) {
    message += ingredients[i];
    // Added comma or else fails tester.js
    if(i < ingredients.length - 1) {
      message += ", ";
    }
  };
  return message;
}

// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  // removed period or will fail tester.js
  let message = `Timer set for ${minutes} minutes`;
  return message;
}

// Define the quit function
function quit() {
  // TODO: Implement this function
  // removed period or will fail tester.js
  return "Program exited";
}

// TODO: Export the functions
module.exports = {
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit: quit,
};