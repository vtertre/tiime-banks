import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { Bank } from './shared/bank.model';
import { Field } from './shared/field.model';

interface BanksResource {
  banks: Array<object>;
}

interface FieldsResource {
  fields: Array<object>;
}

@Injectable({
  providedIn: 'root'
})
export class BankResourceService {

  constructor(private http: HttpClient) { }

  public list(): Observable<Array<Bank>> {
    return this.http.get('/api/banks')
      .pipe(
        flatMap((result: BanksResource) => {
          const banks = result.banks.map(bank => new Bank().deserialize(bank));
          return of(banks);
        })
      );
  }

  public listFields(bankId: number): Observable<Array<Field>> {
    return this.http.get(`/api/banks/${bankId}/fields`)
      .pipe(
        flatMap((result: FieldsResource) => {
          const fields = result.fields.map(field => new Field().deserialize(field));
          return of(fields);
        })
      );
  }
}
