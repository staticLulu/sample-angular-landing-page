import { Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/layout/navbar',
    pathMatch: 'full'
  }
];
