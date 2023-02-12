import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { TrayectoPageRoutingModule } from './trayecto-routing.module';

import { TrayectoPage } from './trayecto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrayectoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TrayectoPage]
})
export class TrayectoPageModule {}
