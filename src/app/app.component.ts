import { Component } from '@angular/core';
import { Bank } from './shared/bank.model';
import { BankResourceService } from './bank-resource.service';
import { Field } from './shared/field.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private fields: Array<Field> = [];
  private model: object = {};

  constructor(private bankResource: BankResourceService) { }

  public onBankSelected(bank: Bank): void {
    this.bankResource.listFields(bank.id).subscribe((fields: Array<Field>) => this.fields = fields);
  }

  public validate(): void {
    console.log(this.model);
  }

  public get hasFields(): boolean {
    return this.fields.length > 0;
  }
}
