import { Component, Output, OnInit } from "@angular/core";
import { UserService } from "../core/user.service";
import { SearchService } from "../core/search.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : Array<any> = [];
  nameFilter:string;

  constructor(private UserService: UserService, private SearchService: SearchService){}

  ngOnInit(){
    this.UserService
    .get()
    .then((users:Array<any>) => {
      this.users = users;
    });

    this.SearchService
        .searchUser
        .subscribe((searchString) => {
          this.nameFilter = searchString;
        });
  }

  createUser(user: any) {
    this.UserService
        .create(user)
        .then((user) => {
          this.users.push(user);
        });
  }

  deleteUser(userId: number) {
    let indexToDelete = this.users.findIndex(user => user.id == userId)
    this.users.splice(indexToDelete, 1);
  }
}
