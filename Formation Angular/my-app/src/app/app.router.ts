import {Router, RouterModule} from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { ContentComponent } from './content/content.component';
import { SandboxComponent } from './sandbox/sandbox.component';


const routes:any = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sandbox',
    component: SandboxComponent
  }
]

export const AppRouter = RouterModule.forRoot(routes);
