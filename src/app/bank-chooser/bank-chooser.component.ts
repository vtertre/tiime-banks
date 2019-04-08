import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bank } from '../shared/bank.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { BankResourceService } from '../bank-resource.service';
import { startWith, map, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-bank-chooser',
  templateUrl: './bank-chooser.component.html',
  styleUrls: ['./bank-chooser.component.scss']
})
export class BankChooserComponent implements OnInit {
  @Output() selected = new EventEmitter<Bank>();

  private banks: Array<Bank> = [];
  private loading = false;

  private bankControl = new FormControl();
  private filteredBanks: Observable<Bank[]>;

  constructor(private bankResource: BankResourceService) { }

  ngOnInit(): void {
    this.loading = true;
    this.bankResource.list()
      .pipe(finalize(() => this.loading = false))
      .subscribe((banks: Array<Bank>) => {
        this.banks = banks;
        this.filteredBanks = this.bankControl.valueChanges
          .pipe(
            startWith<string | Bank>(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this.listBanksMatching(name) : this.banks.slice())
          );
      });
  }

  public getName(bank?: Bank): string | undefined {
    return bank ? bank.name : undefined;
  }

  public onSelectedBankChanged(bank: Bank): void {
    this.selected.emit(bank);
  }

  public trackBank(index: number, bank: Bank) {
    return bank.id;
  }

  private listBanksMatching(value: string): Bank[] {
    const filterValue = value.toLowerCase();
    return this.banks.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
