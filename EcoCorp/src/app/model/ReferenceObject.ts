export class ReferenceObject {
  constructor(
    private _id: number,
    private _name: string,
    private _reference: any,
  ) {
  }

  get id(): number{
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get reference(): any {
    return this._reference;
  }
}
