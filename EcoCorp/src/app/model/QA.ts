export class QA {
  constructor(
    private _question: string,
    private _answer: string,
  ) {
  }


  get question(): string {
    return this._question;
  }

  set question(value: string) {
    this._question = value;
  }

  get answer(): string {
    return this._answer;
  }
}
