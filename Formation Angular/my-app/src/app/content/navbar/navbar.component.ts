import { Component, OnInit } from "@angular/core";
import { AppService } from "../core/app.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  version: string;
  constructor(private AppService:AppService) {}

  ngOnInit(){
    this.version = this.AppService.getVersion();
  }
}
