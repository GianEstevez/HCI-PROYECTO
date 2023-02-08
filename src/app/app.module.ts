import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Servicio

import { Injectable } from '@angular/core';

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