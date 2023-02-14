import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaltrayectoPage } from './modaltrayecto.page';

const routes: Routes = [
  {
    path: '',
    component: ModaltrayectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaltrayectoPageRoutingModule {}
