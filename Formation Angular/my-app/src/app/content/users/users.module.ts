import { NgModule } from "@angular/core";
import { UserComponent } from "./users.component";
import { MatListModule, MatCardModule, MatButtonModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { UserCardComponent } from "./user-card/user-card.component";
import { NameFilterPipe } from "../../shared/pipes/name-filter.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    UserComponent,
    UserCardComponent,
    NameFilterPipe
  ],
  imports: [
    MatListModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [UserComponent]
})
export class UsersModule {}
