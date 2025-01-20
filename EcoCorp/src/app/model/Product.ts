export class Product {
  constructor(
    private _id: number,
    private _name: string,
    private _price: number,
    private _specs: any[],
    private _images: any[],
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

  get specs(): any[] {
    return this._specs;
  }

  get images(): any[] {
    return this._images;
  }
}
