import { NgModule } from "@angular/core";
import { NavBarComponent } from "./navbar.component";
import { SearchComponent } from "./search/search.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PluralPipe } from "../shared/pipes/plural.pipe";
import { TranslatePipe } from "../shared/pipes/translate.pipe";

@NgModule ({
  declarations: [
    NavBarComponent,
    SearchComponent,
    PluralPipe,
    TranslatePipe
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [NavBarComponent]
})
export class NavBarModule {}
