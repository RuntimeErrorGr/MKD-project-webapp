export class Product {
  constructor(
    private _id: number,
    private _name: string,
    private _price: number,
    private _specs: {},
    private _images: string[],
  ) {
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get specs(): {} {
    return this._specs;
  }

  get images(): string[] {
    return this._images;
  }
}
