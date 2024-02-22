interface User {
  readonly _id: number;
  name: string;
  id: number;
  googleId?: string;
  startTrial: () => string;
  anotherMethod(): number;
  getCoupon(couponName: string): number;
}

// reoperting the interface
interface User {
  githubUsername: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
  username: string;
  id: number;
  //   githubUsername: string;
}
const user1: User = {
  _id: 1,
  name: "pedro",
  githubUsername: "pedro",
  id: 1,
  startTrial() {
    return "hello";
  },
  anotherMethod() {
    return 1;
  },
  getCoupon(couponName: "10%") {
    return 10;
  },
};

// admin user
const user2: Admin = {
  _id: 1,
  name: "pedro",
  username: "pedro",
  githubUsername: "pedro",
  id: 1,
  role: "admin",
  startTrial() {
    return "hello";
  },
  anotherMethod() {
    return 1;
  },
  getCoupon(couponName: "10%") {
    return 10;
  },
};
