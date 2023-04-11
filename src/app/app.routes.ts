import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mymodal',
    loadComponent: () => import('./mymodal/mymodal.page').then( m => m.MymodalPage)
  },
  {
    path: 'mypopover',
    loadComponent: () => import('./mypopover/mypopover.page').then( m => m.MypopoverPage)
  },
];
