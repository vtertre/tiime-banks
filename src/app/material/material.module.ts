import { NgModule } from '@angular/core';
import {
  MatSelectModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule
} from '@angular/material';

const materialModules = [
  MatSelectModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule { }
