/**
 * Author: Cesar Acevedo
 * Date: 06/22/25
 * File Name: taco-stand.spec.js
 * Description: used to test class in taco-stand.js
 */

"use strict";

const assert = require("assert");
const TacoStand = require("../src/taco-stand");
const stand1 = new TacoStand();


// test1 testing serveCustomer()
function testServeCustomer() {
  try {
    stand1.on("serve", (customer) => {
      assert.strictEqual(customer, "Alicia");
    });

    stand1.serveCustomer("Alicia");

    console.log("Passed testServeCustomer");
    return true;
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err.message}`);
    return false;
  }
}

// test2 testing prepareTaco
function testPrepareTaco() {
  try {
    stand1.on("prepare", (taco) => {
      assert.strictEqual(taco, "Trompo");
    });

    stand1.prepareTaco("Trompo");

    console.log("Passed testPrepareTaco");
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err.message}`);
    return false;
  }
}

// test3 testing handleRush()
function testHandleRush() {
  try {
    stand1.on("rush", (rushType) => {
      assert.strictEqual(rushType, "Dinner Rush");
    });

    stand1.handleRush("Dinner Rush");

    console.log("Passed testHandleRush");
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err.message}`);
    return false;
  }
}

// Run all three tests
testServeCustomer();
testPrepareTaco();
testHandleRush();