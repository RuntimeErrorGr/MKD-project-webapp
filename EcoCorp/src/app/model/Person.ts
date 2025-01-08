export class Person {
  constructor(
    private _name: string,
    private _function: string,
    private _contact: string,
    private _imageUrl: string
  ) {
  }

  get name(): string {
    return this._name
  }

  get function(): string {
    return this._function
  }

  get contact(): string {
    return this._contact
  }

  get imageUrl(): string {
    return this._imageUrl
  }
}
