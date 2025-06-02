const chalk = require("chalk");
const readline = require("readline");

//function to return the color message based on the color selected
function colorMessage(color) {
  const output = "\nYour favorite color is "; // the output string

  //switch statement
  switch(color) {
    case "1":
      return chalk.blue(output + color + ". Blue");
    case "2":
      return chalk.red(output + color + ". Red");
    case "3":
      return chalk.green(output + color + ". Green");
    case "4":
      return chalk.yellow(output + color + ". Yellow");
    case "5":
      return chalk.cyan(output + color + ". Cyan");
    default:
      return "Invalid Color";
  }
}

function menu() {
  // display menu with color options
  // blue red green yellow orange
  console.log("\nAvailable colors:");
  console.log("1. Blue");
  console.log("2. Red");
  console.log("3. Green");
  console.log("4. Yellow");
  console.log("5. Cyan");
}

// main function for program
function main() {
  // create readline object
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  menu(); // display the menu

  // prompt user for color select
  rl.question("\nWhat is your favorite color? ", function(answer) {
    console.log(colorMessage(answer)); // display the color message
    rl.close();
  });
}

main(); // call the main function