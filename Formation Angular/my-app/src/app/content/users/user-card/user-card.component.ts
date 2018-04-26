import { Component, Input, Output, EventEmitter } from "@angular/core";
import { UserService } from "../../core/user.service";

@Component({
 selector: 'user-card',
 templateUrl: './user-card.component.html',
 styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user:any;
  @Output() onDeleteUser: EventEmitter<any> = new EventEmitter();

  constructor(private UserService: UserService){}

  delete() {
    this.UserService
        .delete(this.user.id)
        .then(() => {
          this.onDeleteUser.emit();
        })
  }
}
