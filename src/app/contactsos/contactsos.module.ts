import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsosPageRoutingModule } from './contactsos-routing.module';

import { ContactsosPage } from './contactsos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsosPageRoutingModule
  ],
  declarations: [ContactsosPage]
})
export class ContactsosPageModule {}
