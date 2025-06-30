/**
 * Author: Cesar Acevedo
 * Date: 06/29/2025
 * File Name: pie.js
 * Description: bakePie() takes pie type + ingredients. returns success/failure or error message
 */
"use strict";

function bakePie(pieType, ingredients) {
  const essentials = ["flour", "sugar", "butter"];
  // check that every item of essentials is in ingredients
  const allEssentials = essentials.every(item => ingredients.includes(item));
  //
  if (!allEssentials) {
    console.warn("Warning: Missing essential ingredients");
    process.exit(1);
  }
  return `Success! ${pieType} pie ready`
}

module.exports = { bakePie };