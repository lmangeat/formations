import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { NavBarModule } from './navbar/navbar.module';
import { UsersModule } from './users/users.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { ContentRouter } from './content.router';

@NgModule({
  imports: [
    CommonModule,
    NavBarModule,
    UsersModule,
    UserProfileModule,
    ContentRouter
  ],
  declarations: [ContentComponent]
})
export class ContentModule { }
