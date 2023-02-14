import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaltrayectoPageRoutingModule } from './modaltrayecto-routing.module';

import { ModaltrayectoPage } from './modaltrayecto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaltrayectoPageRoutingModule
  ],
  declarations: [ModaltrayectoPage]
})
export class ModaltrayectoPageModule {}
