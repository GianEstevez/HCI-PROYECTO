import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrayectoPage } from './trayecto.page';

const routes: Routes = [
  {
    path: '',
    component: TrayectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrayectoPageRoutingModule {}
