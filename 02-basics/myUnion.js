var score;
score = 10;
score = "10";
var john = {
    id: "123",
    username: "john",
};
// ---------------------
function getDbId(id) {
    console.log("Db id is ".concat(id));
}
getDbId(1);
getDbId("1");
function getDbId2(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    console.log("Db id is ".concat(id));
}
// ARRAYS
var data2 = [1, 2, 3];
var data3 = ["1", "2", "3"];
// they can either all numbers or all strings
// const data4: string[] | number[] = [1,2,3,'4','5']; // error
var data4 = ["1", "2", "3", 1, 2, 3];
// ------
var seatAlotment;
seatAlotment = "aisle";
// seatAlotment = "different value"; // error
