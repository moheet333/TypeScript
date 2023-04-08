const user: string[] = ["JW"]
let user2: [string, number, boolean]
user2 = ["JW", 13, false]
// user2 = [13, "JW", false]

let rgb: [number, number, number] = [255, 255, 255]

type User = [number, string]

const newUser: User = [122, "John Wick"]

// newUser[1] = "vrtue" // controversy
// newUser.push(true)

// ENUMS start

enum SeatChoice {
    AISLE = 10,
    MIDDLE,
    WINDOW
}

const seat = SeatChoice.AISLE
console.log(SeatChoice.WINDOW);

export { }
