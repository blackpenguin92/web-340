// plant-list.mjs
"use strict"

// Array of plants
const plants = [
  {name: "Rose", type: "Flower"},
  {name: "Oak", type: "Tree"},
  {name: "Cactus", type: "Succulent"},
];

// function that returns the plants array
function getPlants() {
  return plants;
}

// function to add plant to array
function addPlant(name, type) {
  plants.push({name: name, type: type});
}

/* export function using the module.exports object
module.exports={
  getPlants: getPlants,
  addPlant: addPlant,
}; */

// export function using export keyword -> ESModules
export{getPlants, addPlant};
