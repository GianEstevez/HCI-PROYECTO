import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TrayectoPageModule } from './trayecto/trayecto.module';
import { TrayectoPage } from './trayecto/trayecto.page';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, TrayectoPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Servicio

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any;

  constructor() { this.data = 'definido como A' }

  getData() {
    return this.data;
  }

  setData(data: string) {
    this.data = data;
  }
}

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private data: any;

  constructor() { this.data = "'./assets/bg.jpeg'" }

  getData() {
    return this.data;
  }

  setData(data: string) {
    this.data = data;
  }
}


// EMITER

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  private emitChangeSource = new EventEmitter<any>();

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(change: any) {
    this.emitChangeSource.emit(change);
  }

}
