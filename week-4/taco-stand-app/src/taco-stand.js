/**
 * Author: Cesar Acevedo
 * Date: 06/22/25
 * File Name: taco-stand.js
 * Description: TacoStandEmitter class w/ serveCustomer(), prepareTaco(), and handleRush()
 */

"use strict";

const EventEmitter = require("events");

class TacoStandEmitter extends EventEmitter {
  serveCustomer(customer) {
    this.emit("serve", customer);
  }
  prepareTaco(taco) {
    this.emit("prepare", taco);
  }
  handleRush(rush) {
    this.emit("rush", rush);
  }
}

module.exports = TacoStandEmitter;