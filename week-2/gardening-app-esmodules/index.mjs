"use strict";

/* import getPlants & addPlant function from plant-list.js
const {getPlants, addPlant}=require("./plant-list"); */

// import function from mjs file
import { getPlants, addPlant } from "./plant-list.mjs";

// function that displays the plants array to the console
function displayPlants() {
  const plants = getPlants(); // call the getPlants function

  // *display message
  console.log("--DISPLAYING PLANTS--");

  //loop over the array & output
  for(let i = 0; i < plants.length; i++) {
    console.log("Plant: " + plants[i].name + "\nType: " + plants[i].type);
    console.log(""); // new line
  }
}

// main function for program
function main() {
  // console.log("--Plant List--");

  displayPlants(); // call function

  // display message to console adding new plant..
  console.log("Adding a new plant...\n");

  // add new plant
  addPlant("Lavender", "Herb");

  // display NEW plants list
  // console.log("--Plants List--");
  displayPlants();
}

main();
