/* global moment */

console.log("Hello from JavaScript!");
//console.log("moment");
var datetime = moment()
  .startOf("day")
  .fromNow();
console.log("moment.js package: " + datetime);
