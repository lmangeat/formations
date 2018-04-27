import {Router, RouterModule, Routes} from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { SandboxComponent } from './sandbox/sandbox.component';


const routes:Routes = [
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
