"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 21;
score = "21";
var hitman = { name: "moheet", id: 322 };
hitman = { username: "JohnWick", id: 41 };
function getDbId(id) {
    console.log("DB id is: ".concat(id));
    // id.toUpperCase() // gives error 
    if (typeof id === "string") {
        id.toUpperCase();
    }
}
getDbId(3);
getDbId("3");
// arrays
var data = [1, 2, "we", 1];
var data2 = [1, 2, 3];
var pi = 3.14;
// pi = 3.2 // error
var seatAllotment;
// seatAllotment = "crew"
seatAllotment = "middle";
