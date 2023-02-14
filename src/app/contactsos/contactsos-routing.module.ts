import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsosPage } from './contactsos.page';

const routes: Routes = [
  {
    path: '',
    component: ContactsosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsosPageRoutingModule {}
