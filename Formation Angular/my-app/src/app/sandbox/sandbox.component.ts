import { Component } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent {
  title : string = 'My app';
  message : string = 'message';
  nbSelected : Number;
  name: string = 'Jim';
  changeUsername(username: string) {
    console.log(username);
  }

}
