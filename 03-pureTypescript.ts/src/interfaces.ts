interface TakePhoto1 {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto1 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class YouTube implements TakePhoto1, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public resolution: string // added, that is allowed
  ) {}

  createStory(): void {}
}

interface Story {
  createStory(): void;
}

// thats what typscript is all about , getting less error , having more consistency in your code
