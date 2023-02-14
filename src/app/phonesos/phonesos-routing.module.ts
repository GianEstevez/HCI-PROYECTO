import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhonesosPage } from './phonesos.page';

const routes: Routes = [
  {
    path: '',
    component: PhonesosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhonesosPageRoutingModule {}
