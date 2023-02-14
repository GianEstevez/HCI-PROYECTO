import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhonesosPageRoutingModule } from './phonesos-routing.module';

import { PhonesosPage } from './phonesos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhonesosPageRoutingModule
  ],
  declarations: [PhonesosPage]
})
export class PhonesosPageModule {}
