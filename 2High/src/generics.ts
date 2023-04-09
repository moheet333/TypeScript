const score: Array<number> = []
const score2: number[] = []

function identity(arg: number | boolean): number | boolean {
    return arg
}

function identity2<Type>(val: Type): Type {
    return val
}

interface bottle {
    brand: string,
    type: number
}

const newBootle: bottle = {
    brand: "aef",
    type: 1
}

function identy3<bottle>(val: bottle): bottle {
    return val
}

function identity4<Type>(val: Type[]): Type[] {
    return val
}

const identity5 = <T,>(vale: T[]): T => {
    return vale[2] // some number from array
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function generic<T, U extends Database>(val1: T, val2: U): object {
    return {
        val1,
        val2
    }
}

generic(3, {
    connection: "",
    username: "",
    password: ""
})

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(products: T) {
        this.cart.push(products)
    }
}