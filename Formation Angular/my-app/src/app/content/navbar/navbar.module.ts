import { NgModule } from "@angular/core";
import { NavBarComponent } from "./navbar.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatMenuModule, MatButtonModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouter } from "../../app.router";

@NgModule ({
  declarations: [
    NavBarComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRouter
  ],
  exports: [NavBarComponent]
})
export class NavBarModule{}
