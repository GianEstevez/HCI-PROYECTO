import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidecontactPageRoutingModule } from './sidecontact-routing.module';

import { SidecontactPage } from './sidecontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidecontactPageRoutingModule
  ],
  declarations: [SidecontactPage]
})
export class SidecontactPageModule {}
