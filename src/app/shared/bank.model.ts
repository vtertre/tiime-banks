import { Deserializable } from './deserializable.model';

export class Bank implements Deserializable {
  id: number;
  name: string;

  deserialize(input: any): this {
    this.id = input.id;
    this.name = input.name;
    return this;
  }
}
