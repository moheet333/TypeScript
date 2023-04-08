const User = {
    name: "Moheet",
    email: "moheet@m.com",
    isActive: true,
}

function createUser({ name: string, isPaid: boolean }) {

}

createUser({ name: "moheet", isPaid: false })

function createCourse(): { name: string, price: number } {
    return { name: "moheet", price: 120 }
}

type Usr = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUsr(user: Usr): Usr {
    return {
        name: "",
        email: "",
        isActive: false,
    }
}

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCard?: number,
}

let myUser: User = {
    _id: "1243",
    name: "p",
    email: "p@p.com",
    isActive: false,
}

// myUser._id = "12"

type cardNumber = {
    cardnumber: string,
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export { }