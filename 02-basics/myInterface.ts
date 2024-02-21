interface User {
  readonly _id: number;
  name: string;
  id: number;
  googleId?: string;
  startTrial: () => string;
  anotherMethod(): number;
  getCoupon(couponName: string): number;
}

const user1: User = {
  _id: 1,
  name: "pedro",
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
