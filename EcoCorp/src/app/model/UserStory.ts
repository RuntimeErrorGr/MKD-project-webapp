export class UserStory {
  constructor(
    private _id: number,
    private _story: string,
  ) {
  }

  get id(): number {
    return this._id;
  }

  get story(): string {
    return this._story;
  }
}
