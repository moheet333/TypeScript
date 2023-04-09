function detectType(vale: number | string) {

}

function provideId(id: string) {
    if (!id) {
        return
    }
    id.toLowerCase()
}

interface User {
    username: string,
    email: string
}

interface Admin {
    adminName: string,
    email: string,
    isAdmin: boolean
}

function isAdmin(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

// instanceof when new is used

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());

    } else {
        console.log(x);
    }
}

type Fish = {
    swim(): void
}

type Bird = {
    fly(): void
}

function isFish(val: Fish | Bird): val is Fish {
    return (val as Fish).swim != undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "Fish Food"
    } else {
        return "Bird Food"
    }
}

// discriminated unions

interface circle {
    kind: "circle",
    radius: number
}

interface square {
    kind: "square",
    side: number
}

interface rectangle {
    kind: "rectangle"
    length: number,
    breadth: number
}

type Shape = square | circle | rectangle

function getShape(shape: Shape): string {
    if (shape.kind === "circle") {
        return "circle"
    }
    return "shape.side"
}

// 

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            break;
        case "square":
            break
        case "rectangle":
            break

        default: // imp
            const _defaultForShape: never = shape
            return _defaultForShape
            break;
    }
}