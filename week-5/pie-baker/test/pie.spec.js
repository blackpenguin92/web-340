/**
 * Author: Cesar Acevedo
 * Date: 06/29/2025
 * File Name: pie.spec.js
 * Description: 3x unit tests for bakePie function
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
// test1
test("Success on all ingredients present", () => {
  // all ingredients present and accounted for
  const result = bakePie("apple", ["flour", "sugar", "butter", "apples"]);
  expect(result).toBe("Success! apple pie ready");
});

// test2
test("Fail on missing ingredients", () => {
  // runs mocks of exit process and console.warn and "listen" for them
  const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
  const mockWarn = jest.spyOn(console, "warn").mockImplementation(() => {});

  // try with missing "sugar"
  bakePie("apple", ["flour", "butter"]);

  // check if console.warn or exit process was called/executed
  expect(mockWarn).toHaveBeenCalledWith("Warning: Missing essential ingredients");
  expect(mockExit).toHaveBeenCalledWith(1);

  // restores default behaviors
  mockExit.mockRestore();
  mockWarn.mockRestore();

})

// test3
test("Fail on NO ingredients", () => {
  // runs mocks of exit process and console.warn and "listen" for them
  const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
  const mockWarn = jest.spyOn(console, "warn").mockImplementation(() => {});

  // try with no ingredients at all
  bakePie("apple", []);

  // check if console.warn or exit process was called/executed
  expect(mockWarn).toHaveBeenCalledWith("Warning: Missing essential ingredients");
  expect(mockExit).toHaveBeenCalledWith(1);

  // restores default behaviors
  mockExit.mockRestore();
  mockWarn.mockRestore();
})
