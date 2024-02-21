const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;
let seatIndex;

if (seatIndex === AISLE) {
  console.log("aisle");
} else if (seatIndex === MIDDLE) {
  console.log("middle");
} else if (seatIndex === WINDOW) {
  console.log("window");
} else {
  console.log("unknown");
}

// enum
enum SeatChoice {
  AISLE = 0,
  MIDDLE = 1,
  WINDOW = 2,
}

let seatIndex2 = SeatChoice.MIDDLE;
console.log(seatIndex2);

// navigation
enum NavigationItem {
  HOME,
  ABOUT,
  SERVICES,
  CONTACT,
}

let selectedNavItem: NavigationItem = NavigationItem.HOME;
