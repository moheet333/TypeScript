"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 8;
    }
}
// const John = new TakePhoto("JW", "Sepia") // gives error
class Insta extends TakePhoto {
    getSepia() {
        console.log("Sepia");
    }
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
const JW = new Insta("BabaYaga", "Boogeyman", 12);
JW.getReelTime();
