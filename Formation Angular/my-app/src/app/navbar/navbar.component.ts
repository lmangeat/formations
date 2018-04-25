import { Component } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
  title : string = 'My app';
  name: string = 'Jim';
  message : string = 'message';
  nbSelected : Number;
  changeUsername(username: string) {
    console.log(username);
  }
}
