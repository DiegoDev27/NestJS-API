export class Result<T> {
 public data: T;
 public failure: boolean;
 public message: string;
 public success: boolean;

 public fail(value: string): Result<T> {
  this.failure = true;
  this.success = false;
  this.message = value;
  return this;
 }

 public ok(value: T): Result<T> {
  this.data = value;
  this.failure = false;
  this.success = true;
  return this;
 }
}
