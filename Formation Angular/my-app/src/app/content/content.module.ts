import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { NavBarModule } from './navbar/navbar.module';
import { UsersModule } from './users/users.module';

@NgModule({
  imports: [
    CommonModule,
    NavBarModule,
    UsersModule,
  ],
  declarations: [ContentComponent]
})
export class ContentModule { }
