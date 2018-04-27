import { NgModule } from "@angular/core";
import { NavBarComponent } from "./navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatMenuModule, MatButtonModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouter } from "../../app.router";
import { SearchComponent } from './search/search.component';

@NgModule ({
  declarations: [
    NavBarComponent,
    SearchComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    AppRouter
  ],
  exports: [NavBarComponent]
})
export class NavBarModule{}
