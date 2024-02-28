"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    constructor(cameraMode, filter, burst, resolution // added, that is allowed
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.resolution = resolution;
    }
    createStory() { }
}
// thats what typscript is all about , getting less error , having more consistency in your code
