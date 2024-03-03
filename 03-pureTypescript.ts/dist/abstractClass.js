"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getRealTime() {
        //some calculations
        console.log("real time");
        return 10;
    }
}
// we are not able to create object of abstract class
// const photo = new TakePhoto('test', 'test');
// we can extend abstract class, but we can not create object of abstract class.WE HAVE TO IMPLEMENT THE ABSTRACT METHOD,
class Instagram2 extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const photo = new Instagram2("test", "test", 10);
photo.getRealTime();
