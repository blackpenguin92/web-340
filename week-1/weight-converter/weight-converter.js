/**
 * Author: cesar acevedo
 * Date: 06/01/25
 * File Name: weight-converter.js
 * Description: convert pounds to kilograms
*/

"use strict";

// TODO: Implement the weight conversion logic here
// kilograms = Pounds / 2.205

/*
const readline = require("readline");

function convert_lbs_2_kgs(pounds) {
  const kgs = (pounds / 2.205).toFixed(2); // convert lbs to kgs & round 2 decimal places
  return kgs;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("\nPounds to Kilograms Calculator")
  rl.question("Enter a weight in pounds: ",function(weight){
    if()
  })
}

It was at this point I realized that this wasn't what the assignment was asking for.
attempt #2 below
*/

function main() {
  const args = process.argv; // command line arguments
  const pounds = args[2];

  // check for arguments
  if(args.length !==3) {
    console.error("Usage: node weight-converter.js <pounds>");
    process.exit(1);
  }

  // check if input is a number
  if(isNaN(pounds)) {
    console.error("Input must be a numver.");
    process.exit(1);
  }

  // run conversion
  const kgs = (pounds / 2.205).toFixed(2);

  // display result
  // console.log(`${pounds} lbs equals ${kgs} kgs.`); was getting test failed but test is expecting a value only.
  console.log(kgs);
}

main();