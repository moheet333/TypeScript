"use strict";
function detectType(vale) {
}
function provideId(id) {
    if (!id) {
        return;
    }
    id.toLowerCase();
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// instanceof when new is used
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x);
    }
}
function isFish(val) {
    return val.swim != undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        return "Bird Food";
    }
}
function getShape(shape) {
    if (shape.kind === "circle") {
        return "circle";
    }
    return "shape.side";
}
// 
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            break;
        case "square":
            break;
        case "rectangle":
            break;
        default: // imp
            const _defaultForShape = shape;
            return _defaultForShape;
            break;
    }
}
