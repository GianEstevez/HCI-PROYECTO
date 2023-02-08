import { ModalController } from '@ionic/angular';
import { SimpleModalPage } from '../simple-modal/simple-modal.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterModalPage } from '../filter-modal/filter-modal.page';
import { DataService, BackgroundService } from '../app.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  

  //backgroundImages = [
  //  './assets/bg.jpeg',
  //];
  

  public bgImage = './assets/bg.jpeg';
  public aColor: string = "#ccc";

  // cambiarFondoFilterParadas(){
  //   this.bgImage = './assets/fondo2.jpeg';
  // }

  cambiarFondoFilterParadas(){
    this.bgImage = this.backgroundService.getData();
  }

  constructor(private modalCtrl: ModalController,
    private route: Router,
    private dataService: DataService,
    private backgroundService: BackgroundService) {}

  ngOnInit(): void {
      //this.presentModal();
      // this.bgImage = './assets/bg.jpeg'; 
      
  }
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: SimpleModalPage,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }

  async presentModalFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterModalPage,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }


  abrirbs() {
    this.presentModal();
  }

  abrirfilter(){
    this.presentModalFilter();
  }

  filter() {
    this.route.navigate(['/filter']);
  }

  viewData() {
    const variableRecuperada = this.dataService.getData();
    console.log(variableRecuperada);
  }
}
