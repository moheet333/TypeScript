let score: number | string = 33
score = 21
score = "21"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitman: User | Admin = { name: "moheet", id: 322 }

hitman = { username: "JohnWick", id: 41 }

function getDbId(id: number | string) {
    console.log(`DB id is: ${id}`);
    // id.toUpperCase() // gives error 
    if (typeof id === "string") {
        id.toUpperCase()
    }
}

getDbId(3)
getDbId("3")

// arrays

const data: (number | string)[] = [1, 2, "we", 1]
const data2: number[] | string[] = [1, 2, 3]

let pi: 3.14 = 3.14
// pi = 3.2 // error

let seatAllotment: "aisle" | "middle" | "window"

// seatAllotment = "crew"
seatAllotment = "middle"

export { }