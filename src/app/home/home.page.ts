import { ModalController } from '@ionic/angular';
import { SimpleModalPage } from '../simple-modal/simple-modal.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterModalPage } from '../filter-modal/filter-modal.page';
import { DataService, BackgroundService } from '../app.module';
import { EventEmitterService } from '../app.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  

  //backgroundImages = [
  //  './assets/bg.jpeg',
  //];
  

  
  public aColor: string = "#ccc";

  // cambiarFondoFilterParadas(){
  //   this.bgImage = './assets/fondo2.jpeg';
  // }

  contador = 2;

  
  cambiarFondoFilterParadas(){

    if (this.contador % 2 == 0){
      this.backgroundService.setData("'./assets/fondo2.jpeg'");
      this.bgImage = this.backgroundService.getData();
      console.log(this.bgImage);
      this.contador = this.contador + 1;
    }else {
      this.backgroundService.setData("'./assets/bg.jpeg'");
      this.bgImage = this.backgroundService.getData();
      console.log(this.bgImage);
      this.contador = this.contador + 1;
    }

    
  }

  //public bgImage = this.backgroundService.getData();
  public bgImage = "'./assets/bg.jpeg'";
  data = "'./assets/bg.jpeg'";

  constructor(private modalCtrl: ModalController,
    private route: Router,
    private dataService: DataService,
    private backgroundService: BackgroundService,
    private eventEmitterService: EventEmitterService) {
      
      //this.bgImage = this.backgroundService.getData();

      this.eventEmitterService.changeEmitted$.subscribe(
        change => {
          this.bgImage = change;
        }
      );

    }

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
