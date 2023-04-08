interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner",
}

const john: Admin = {
    dbId: 22, email: "BabaYaga", userId: 41, startTrial: () => {
        return "trail started"
    },
    getCoupon: (name: "moheet", off: 21) => {
        return 10
    },
    githubToken: "github",
    role: "learner"
}

john.email = "Boogeyman"

export { }
