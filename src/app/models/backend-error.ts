export class BackendError {
  constructor(
    public id: number,
    public errorCode: string,
    public severity: number,
    public value: string
  ) {}
}
