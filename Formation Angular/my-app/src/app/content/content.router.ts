import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "./content.component";
import { UsersComponent } from "./users/users.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes:Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: '',
        component: UsersComponent
      },
      {
        path:'user/:id',
        component: UserProfileComponent
      }
    ]
  },
]

export const ContentRouter = RouterModule.forChild(routes);
