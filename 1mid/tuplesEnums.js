var user = ["JW"];
var user2;
user2 = ["JW", 13, false];
// user2 = [13, "JW", false]
var rgb = [255, 255, 255];
var newUser = [122, "John Wick"];
// newUser[1] = "vrtue" // controversy
// newUser.push(true)
// ENUMS start
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 12] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var seat = SeatChoice.AISLE;
console.log(SeatChoice.WINDOW);
