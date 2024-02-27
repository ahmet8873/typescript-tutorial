class User4 {
  private _courseCount = 1;
  readonly city: string = "san francisco";
  constructor(
    public name: string,
    public email: string,

    private _id: string
  ) {}

  private deleteToken() {}

  get id(): string {
    return this._id;
  }

  get appleEmail(): string {
    return `apple.${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // you cannot return anything from setter
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be greater than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User4 {
  isFamily: boolean = true;
  changeCourseCount() {
    // this._courseCount = 4; // error cannot reach private properties
  }
}
