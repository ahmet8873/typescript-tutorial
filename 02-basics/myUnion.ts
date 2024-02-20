let score: number | string;
score = 10;
score = "10";
// score=true;  // this will give an error

type User = {
  name: string;
  id: string;
};

type Admin = {
  username: string;
  id: string;
};

let john: User | Admin = {
  id: "123",
  username: "john",
};

// ---------------------
function getDbId(id: number | string) {
  console.log(`Db id is ${id}`);
}

getDbId(1);
getDbId("1");

function getDbId2(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
  console.log(`Db id is ${id}`);
}

// ARRAYS
const data2: number[] | string[] = [1, 2, 3];
const data3: string[] | number[] = ["1", "2", "3"];
// they can either all numbers or all strings
// const data4: string[] | number[] = [1,2,3,'4','5']; // error

const data4: (string | number)[] = ["1", "2", "3", 1, 2, 3];

// ------
let seatAlotment: "aisle" | "middle" | "window";

seatAlotment = "aisle";
// seatAlotment = "different value"; // error
