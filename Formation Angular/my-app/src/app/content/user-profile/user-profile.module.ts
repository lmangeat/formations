import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [UserProfileComponent]
})
export class UserProfileModule { }
