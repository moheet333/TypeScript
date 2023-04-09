// class User {
//     public email: string
//     private name: string
//     private readonly city: string = ""
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }

class User {
    protected _courseCount = 1
    private readonly city: string = ""
    constructor(public email: string, private name: string) {

    }

    private deleteToken() {
        console.log("Token deleted");
    }

    get getAppleEmail(): string {
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum: number) {
        if (courseNum < 1) {
            throw new Error("Course count should be more than one")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const JohnWick = new User("j@w.com", "JohnWick")