/**
 * Author: Cesar Acevedo
 * Date: 06/22/25
 * File Name: index.js
 * Description: CLI program that uses TacoStand class
 */

"use strict";

const TacoStand = require("./taco-stand");
const stand2 = new TacoStand();

stand2.on("serve", (customer) => {
  console.log(`Taco Stand #2 serves: ${customer}`);
});

stand2.on("prepare", (taco) => {
  console.log (`Taco Stand #2 prepare: ${taco} taco`);
});

stand2.on("rush", (rushType) => {
  console.log(`Taco Stand #2 handles rush: ${rushType}`);
});

// get input from user
const userInput = process.argv.slice(2);

if (userInput.length < 2) {
  console.log("Please use: <command> <argument>");
  process.exit(1);
}

const command = userInput[0];
const argument = userInput.slice(1).join(" ");

switch (command) {
  case "serve":
    stand2.serveCustomer(argument);
    break;
  case "prepare":
    stand2.prepareTaco(argument);
    break;
  case "rush":
    stand2.handleRush(argument);
    break;
  default:
    console.log(`Unknown command: ${command}`);
}