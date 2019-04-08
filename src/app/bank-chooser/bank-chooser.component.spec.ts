import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankChooserComponent } from './bank-chooser.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BankChooserComponent', () => {
  let component: BankChooserComponent;
  let fixture: ComponentFixture<BankChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule, NoopAnimationsModule],
      declarations: [BankChooserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
