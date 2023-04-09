abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getSepia(): void
    getReelTime(): number {
        return 8
    }
}

// const John = new TakePhoto("JW", "Sepia") // gives error

class Insta extends TakePhoto {
    getSepia(): void {
        console.log("Sepia");

    }
    constructor(public cameraMode: string, public filter: string, public burst: number) {
        super(cameraMode, filter)
    }
}

const JW = new Insta("BabaYaga", "Boogeyman", 12)

JW.getReelTime()
