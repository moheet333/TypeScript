"use strict";
const score = [];
const score2 = [];
function identity(arg) {
    return arg;
}
function identity2(val) {
    return val;
}
const newBootle = {
    brand: "aef",
    type: 1
};
function identy3(val) {
    return val;
}
function identity4(val) {
    return val;
}
const identity5 = (vale) => {
    return vale[2]; // some number from array
};
function generic(val1, val2) {
    return {
        val1,
        val2
    };
}
generic(3, {
    connection: "",
    username: "",
    password: ""
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
