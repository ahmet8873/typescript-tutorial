interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class YouTube implements TakePhoto, Story {
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
