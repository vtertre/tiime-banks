import { Deserializable } from './deserializable.model';

export class Field implements Deserializable {
  label: string;
  name: string;
  regex?: string;
  required: boolean;
  type: string;
  values?: Array<any>;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

  get isList(): boolean {
    return this.type === 'list';
  }
}
