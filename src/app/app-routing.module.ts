import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'simple-modal',
    loadChildren: () => import('./simple-modal/simple-modal.module').then( m => m.SimpleModalPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'filter-modal',
    loadChildren: () => import('./filter-modal/filter-modal.module').then( m => m.FilterModalPageModule)
  },
  {
    path: 'trayecto',
    loadChildren: () => import('./trayecto/trayecto.module').then( m => m.TrayectoPageModule)
  },
  {
    path: 'modaltrayecto',
    loadChildren: () => import('./modaltrayecto/modaltrayecto.module').then( m => m.ModaltrayectoPageModule)
  },
  {
    path: 'phonesos',
    loadChildren: () => import('./phonesos/phonesos.module').then( m => m.PhonesosPageModule)
  },
  {
    path: 'contactsos',
    loadChildren: () => import('./contactsos/contactsos.module').then( m => m.ContactsosPageModule)
  },
  {
    path: 'sidecontact',
    loadChildren: () => import('./sidecontact/sidecontact.module').then( m => m.SidecontactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
