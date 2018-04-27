import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";
import { MatListModule, MatCardModule, MatButtonModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { UserCardComponent } from "./user-card/user-card.component";
import { NameFilterPipe } from "../../shared/pipes/name-filter.pipe";
import { FormsModule } from "@angular/forms";
import { ContentRouter } from "../content.router";
import { ConfirmDirective } from "../../shared/directives/confirm.directive";

@NgModule({
  declarations: [
    UsersComponent,
    UserCardComponent,
    NameFilterPipe,
    ConfirmDirective
  ],
  imports: [
    MatListModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ContentRouter
  ],
  exports: [UsersComponent]
})
export class UsersModule {}
