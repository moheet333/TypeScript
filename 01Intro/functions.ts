function addTwo (num: number): number {
    return num+2;
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signupUser(name: string, email: string, isPaid: boolean = false){
}

signupUser("f","f",false)
signupUser("f","f") // no error

getUpper("hello")
addTwo(5)


// function getValue(myVal: number): boolean {
//     if(myVal > 5 ) {
//         return true;
//     }
//     return "200 OK";
// } // THis gives a error

const exam = (): string => {
    return ""
}

const heros = ["openSource", "CP"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export {}