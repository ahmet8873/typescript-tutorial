var AISLE = 0;
var MIDDLE = 1;
var WINDOW = 2;
var seatIndex;
if (seatIndex === AISLE) {
    console.log("aisle");
}
else if (seatIndex === MIDDLE) {
    console.log("middle");
}
else if (seatIndex === WINDOW) {
    console.log("window");
}
else {
    console.log("unknown");
}
// enum
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var seatIndex2 = SeatChoice.MIDDLE;
console.log(seatIndex2);
// navigation
var NavigationItem;
(function (NavigationItem) {
    NavigationItem[NavigationItem["HOME"] = 0] = "HOME";
    NavigationItem[NavigationItem["ABOUT"] = 1] = "ABOUT";
    NavigationItem[NavigationItem["SERVICES"] = 2] = "SERVICES";
    NavigationItem[NavigationItem["CONTACT"] = 3] = "CONTACT";
})(NavigationItem || (NavigationItem = {}));
var selectedNavItem = NavigationItem.HOME;
