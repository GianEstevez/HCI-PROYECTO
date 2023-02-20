import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidecontactPage } from './sidecontact.page';

const routes: Routes = [
  {
    path: '',
    component: SidecontactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidecontactPageRoutingModule {}
