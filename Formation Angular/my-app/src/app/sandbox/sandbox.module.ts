import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from './sandbox.component';
import { PluralPipe } from '../shared/pipes/plural.pipe';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TranslatePipe } from '../shared/pipes/translate.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    SandboxComponent,
    PluralPipe,
    TranslatePipe,
    SearchComponent
  ]
})
export class SandboxModule { }
